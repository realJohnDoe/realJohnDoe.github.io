<script>
	export let techButtonProps;

	const link = techButtonProps.link; // Link for the button
	const icon = techButtonProps.icon; // Icon for the button
	const alt = techButtonProps.alt; // Alternative text for the icon
	const width = techButtonProps.width;
</script>

<a href={link} target="_blank">
	<button class="btn btn-square btn-neutral">
		<img class={width} src={icon} {alt} />
	</button>
</a>
