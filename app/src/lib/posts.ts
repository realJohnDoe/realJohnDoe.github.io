import type { ComponentType } from 'svelte';

/** Frontmatter a post file may declare. */
interface Frontmatter {
	title: string;
	date: string;
	tags?: string[];
	/** Optional teaser. Falls back to the first paragraph of the post. */
	description?: string;
}

export interface PostMeta {
	slug: string;
	title: string;
	date: Date;
	tags: string[];
	description: string;
	readingMinutes: number;
}

export interface Post {
	meta: PostMeta;
	component: ComponentType;
}

interface PostModule {
	default: ComponentType;
	metadata: Frontmatter;
}

// Both globs are eager so the index and the post pages share one pass over
// src/posts. With a handful of posts that costs less than it would to split
// metadata and content into separate chunks.
const modules = import.meta.glob<PostModule>('/src/posts/*.md', { eager: true });
const sources = import.meta.glob<string>('/src/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const WORDS_PER_MINUTE = 200;

/** Strips frontmatter, raw HTML blocks and Markdown syntax down to readable prose. */
function toPlainText(markdown: string): string {
	return markdown
		.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
		.replace(/```[\s\S]*?```/g, '')
		.replace(/<[^>]+>/g, '')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/^[|>#\s-]*$/gm, '')
		.replace(/[*_`]/g, '')
		.trim();
}

/** The first real paragraph, trimmed to roughly one line of teaser text. */
function firstParagraph(plain: string, maxLength = 220): string {
	const paragraph = plain
		.split(/\r?\n\s*\r?\n/)
		.map((block) => block.replace(/\s+/g, ' ').trim())
		// Skip the leading "# Title" heading and any stray table rows.
		.find((block) => block.length > 60 && !block.startsWith('#'));

	if (!paragraph) return '';
	if (paragraph.length <= maxLength) return paragraph;
	// Trim trailing punctuation so the ellipsis does not read as ".…".
	return (
		paragraph.slice(0, paragraph.lastIndexOf(' ', maxLength)).replace(/[\s,;:.–—-]+$/, '') + '…'
	);
}

function slugOf(path: string): string {
	return path.split('/').pop()!.replace(/\.md$/, '');
}

const allPosts: Post[] = Object.entries(modules)
	.map(([path, module]) => {
		const plain = toPlainText(sources[path] ?? '');
		const words = plain.split(/\s+/).filter(Boolean).length;

		return {
			component: module.default,
			meta: {
				slug: slugOf(path),
				title: module.metadata.title,
				date: new Date(module.metadata.date),
				tags: module.metadata.tags ?? [],
				description: module.metadata.description ?? firstParagraph(plain),
				readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE))
			}
		};
	})
	.sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime());

/** Every post, newest first. */
export const posts: Post[] = allPosts;

/** Metadata only, newest first — enough to render a listing. */
export const postMetas: PostMeta[] = allPosts.map((post) => post.meta);

export function getPost(slug: string): Post | undefined {
	return allPosts.find((post) => post.meta.slug === slug);
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	});
}
