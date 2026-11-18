<script>
	import TechButton from './TechButton.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [image]
	 * @property {string[]} [images] - A row of portrait phone screenshots, shown instead of the single `image`.
	 * @property {string} title
	 * @property {boolean} [archived] - Marks a project that is no longer maintained.
	 * @property {string} description
	 * @property {{href: string, icon: string, text: string}[]} links
	 * @property {import('./techButtons').TechButtonProps[]} technologies
	 */

	/** @type {Props} */
	let {
		image = undefined,
		images = undefined,
		title,
		archived = false,
		description,
		links,
		technologies
	} = $props();
</script>

<div class="border border-primary rounded-xl flex flex-col">
	{#if images}
		<figure class="relative flex-shrink-0 aspect-[3/2] bg-base-100 rounded-t-xl p-3">
			<div class="grid grid-cols-3 gap-2 h-full">
				{#each images as img (img)}
					<img
						src={img}
						alt={title}
						loading="lazy"
						class="w-full h-full object-contain rounded-md"
					/>
				{/each}
			</div>
		</figure>
	{:else}
		<figure class="relative flex-shrink-0 aspect-[3/2]">
			<img src={image} alt={title} loading="lazy" class="w-full h-full object-cover" />
		</figure>
	{/if}
	<div class="p-4 md:p-6 flex flex-col h-full justify-between">
		<div>
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
				<!-- Row for title and links -->
				<h3 class="text-lg font-semibold flex items-center gap-2">
					{title}
					{#if archived}
						<span class="badge badge-outline rounded-md border-base-content/50 text-base-content/70"
							>Archived</span
						>
					{/if}
				</h3>
				<div class="flex gap-2">
					<!-- Section for links -->
					{#each links as link (link.href)}
						<a
							href={link.href}
							target="_blank"
							rel="external"
							class="btn btn-square btn-neutral shadow-2xl hover:shadow-xl transition-shadow duration-200"
						>
							<img class="w-6" src={link.icon} alt={link.text} />
						</a>
					{/each}
				</div>
			</div>
			<p class="project-category pb-2 pt-4">{description}</p>
		</div>
		<div>
			<p class="text-md font-semibold pb-2">Technologies:</p>
			<div class="flex gap-2 flex-wrap">
				{#each technologies as tech (tech.link)}
					<TechButton techButtonProps={tech} />
				{/each}
			</div>
		</div>
	</div>
</div>
