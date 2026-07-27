<script>
	import { base } from '$app/paths';
	import { formatDate } from './posts';

	/** @type {import('./posts').PostMeta} */
	export let post;
</script>

<a
	href="{base}/blog/{post.slug}/"
	class="group border border-primary hover:border-accent focus-visible:border-accent rounded-xl flex flex-col gap-3 p-4 md:p-6 transition-colors duration-200 focus-visible:outline-none"
>
	<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm opacity-70">
		<time class="font-mono italic" datetime={post.date.toISOString().slice(0, 10)}>
			{formatDate(post.date)}
		</time>
		<span aria-hidden="true">·</span>
		<span>{post.readingMinutes} min read</span>
	</div>

	<h3 class="text-lg font-semibold group-hover:text-accent transition-colors duration-200">
		{post.title}
	</h3>

	{#if post.description}
		<p>{post.description}</p>
	{/if}

	{#if post.tags.length}
		<div class="flex gap-2 flex-wrap">
			{#each post.tags as tag}
				<span class="badge badge-secondary rounded-md">{tag}</span>
			{/each}
		</div>
	{/if}

	<span class="link-accent text-sm mt-auto pt-1">Read the post →</span>
</a>
