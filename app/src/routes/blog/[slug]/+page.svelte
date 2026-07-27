<script>
	import { base } from '$app/paths';
	import { formatDate, getPost } from '$lib/posts';

	/** @type {import('./$types').PageData} */
	export let data;

	$: meta = data.meta;
	$: post = getPost(meta.slug);
</script>

<svelte:head>
	<title>{meta.title} — Johannes Döllinger</title>
	<meta name="description" content={meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="article:published_time" content={meta.date.toISOString()} />
</svelte:head>

<div class="lg:p-2 lg:py-6 flex flex-col gap-4 lg:gap-8 w-full max-w-2xl mx-auto">
	<a class="link-accent text-sm self-start" href="{base}/#writing">← Johannes Döllinger</a>

	<article class="card bg-base-300 shadow-xl flex flex-col">
		<div class="card-body p-4 md:p-6">
			<header class="border-b border-primary pb-4 mb-2">
				<h1 class="text-2xl md:text-3xl font-semibold">{meta.title}</h1>

				<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-2 text-sm opacity-70">
					<time class="font-mono italic" datetime={meta.date.toISOString().slice(0, 10)}>
						{formatDate(meta.date)}
					</time>
					<span aria-hidden="true">·</span>
					<span>{meta.readingMinutes} min read</span>
				</div>

				{#if meta.tags.length}
					<div class="flex gap-2 flex-wrap pt-3">
						{#each meta.tags as tag}
							<span class="badge badge-secondary rounded-md">{tag}</span>
						{/each}
					</div>
				{/if}
			</header>

			<div class="post-prose prose max-w-none">
				{#if post}
					<svelte:component this={post.component} />
				{/if}
			</div>
		</div>
	</article>

	<div class="flex justify-between gap-4 text-sm">
		<a class="link-accent" href="{base}/#writing">← More writing</a>
		<a class="link-accent" href="{base}/">Back to the homepage →</a>
	</div>
</div>
