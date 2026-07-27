import { error } from '@sveltejs/kit';
import { getPost, postMetas } from '$lib/posts';
import type { EntryGenerator, PageLoad } from './$types';

/** Tells the static adapter which slugs exist, so each post is written to disk. */
export const entries: EntryGenerator = () => postMetas.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, `There is no blog post called "${params.slug}".`);

	// Only the metadata travels through `load` — the compiled Svelte component
	// is not serializable, so the page picks it up from the module graph itself.
	return { meta: post.meta };
};
