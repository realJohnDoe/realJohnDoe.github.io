<script>
	import TechButton from './TechButton.svelte';

	export let image;
	export let title;
	export let description;
	export let links;
	export let technologies;
</script>

<div class="card border border-base-100">
	<figure class="relative">
		<img src={image} alt={title} loading="lazy" />
	</figure>
	<div class="card-body p-6 flex flex-col">
		<div class="flex justify-between items-end">
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
		<p class="project-category pt-2">{description}</p>
		<h2 class="text-md font-semibold">Technologies:</h2>
		<div class="flex gap-2">
			{#each technologies as tech}
				<TechButton techButtonProps={tech} />
			{/each}
		</div>
	</div>
</div>
