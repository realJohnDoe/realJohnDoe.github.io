<script>
	import TechButton from './TechButton.svelte';

	export let image;
	export let title;
	export let description;
	export let links;
	export let technologies;
</script>

<div class="card bg-base-300 shadow-xl">
	<figure class="relative">
		<img src={image} alt={title} loading="lazy" />
		<div class="absolute w-full bottom-0 right-0 p-4 bg-gradient-to-t from-base-300 to-transparent">
			<!-- Overlay for links -->
			<div class="flex gap-2 justify-end">
				<!-- Section for links -->
				{#each links as link}
					<a href={link.href} target="_blank">
						<button class="btn btn-square btn-neutral shadow-2xl">
							<img class="w-6" src={link.icon} alt={link.text} />
						</button>
					</a>
				{/each}
			</div>
		</div>
	</figure>
	<div class="card-body flex flex-col">
		<div class="flex h-full">
			<div class="grow pe-5">
				<h3 class="text-lg font-semibold">{title}</h3>
				<p class="project-category">{description}</p>
			</div>
		</div>
		<h2 class="text-md font-semibold">Technologies:</h2>
		<div class="flex gap-2">
			{#each technologies as tech}
				<TechButton techButtonProps={tech} />
			{/each}
		</div>
	</div>
</div>
