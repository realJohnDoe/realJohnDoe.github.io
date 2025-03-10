<script>
	export let image;
	export let title;
	export let description;
	export let links;
</script>

<div class="card shadow-md">
	<figure>
		<img src={image} alt={title} loading="lazy" />
	</figure>
	<div class="card-body">
		<div class="flex h-full">
			<div class="grow pe-5">
				<h3 class="text-lg font-semibold">{title}</h3>
				<p class="project-category">{description}</p>
			</div>
			<div class="flex gap-2 items-end h-full">
				{#each links as link}
					<a href={link.href} target="_blank">
						<button class="btn btn-square btn-primary shadow-xl">
							<img class="w-6" src={link.icon} alt={link.text} />
						</button>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
