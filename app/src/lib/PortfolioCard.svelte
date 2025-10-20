<script>
	import TechButton from './TechButton.svelte';

	export let image;
	export let title;
	export let description;
	export let links;
	export let technologies;
</script>

<div class="border border-primary rounded-xl flex flex-col">
	<figure class="relative flex-shrink-0">
		<img src={image} alt={title} loading="lazy" />
	</figure>
	<div class="p-4 md:p-6 flex flex-col h-full justify-between">
		<div>
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
				<!-- Row for title and links -->
				<h3 class="text-lg font-semibold">{title}</h3>
				<div class="flex gap-2">
					<!-- Section for links -->
					{#each links as link}
						<a href={link.href} target="_blank">
							<button
								class="btn btn-square btn-neutral shadow-2xl hover:shadow-xl transition-shadow duration-200"
							>
								<!-- Updated shadow classes -->
								<img class="w-6" src={link.icon} alt={link.text} />
							</button>
						</a>
					{/each}
				</div>
			</div>
			<p class="project-category pb-2 pt-4">{description}</p>
		</div>
		<div>
			<h2 class="text-md font-semibold pb-2">Technologies:</h2>
			<div class="flex gap-2 flex-wrap">
				{#each technologies as tech}
					<TechButton techButtonProps={tech} />
				{/each}
			</div>
		</div>
	</div>
</div>
