<script>
	/** @type {{techButtonProps: import('./techButtons').TechButtonProps}} */
	let { techButtonProps } = $props();

	let link = $derived(techButtonProps.link);
	let icon = $derived(techButtonProps.icon);
	let alt = $derived(techButtonProps.alt);
	let width = $derived(techButtonProps.width);
</script>

<a href={link} target="_blank">
	<button class="btn btn-square btn-neutral">
		<img class={width} src={icon} {alt} />
	</button>
</a>
