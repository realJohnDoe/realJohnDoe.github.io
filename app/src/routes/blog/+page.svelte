<script>
	import PostCard from '$lib/PostCard.svelte';
	import { postMetas } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog — Johannes Döllinger</title>
	<meta
		name="description"
		content="Notes on software engineering, developer tooling, and the side projects I build."
	/>
</svelte:head>

<div class="lg:p-2 lg:py-6 flex flex-col gap-4 lg:gap-8">
	<div class="card bg-base-300 shadow-xl flex flex-col">
		<div class="card-body p-4 md:p-6">
			<h1 class="text-2xl pb-2">Blog</h1>

			<p class="pb-3">
				Longer-form notes on the things I build and the decisions behind them — mostly software
				engineering, developer tooling, and my side projects.
			</p>

			{#if postMetas.length}
				<div class="grid gap-4">
					{#each postMetas as post (post.slug)}
						<PostCard {post} />
					{/each}
				</div>
			{:else}
				<p class="opacity-70">No posts published yet — the first one is on its way.</p>
			{/if}
		</div>
	</div>
</div>
