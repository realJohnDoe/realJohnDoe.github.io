<script>
	export let tech; // Technology name
	export let link; // Link for the button
	export let icon; // Icon for the button
	export let alt; // Alternative text for the icon
	export let width = 'w-6'; // Default width for the icon
</script>

<a href={link} target="_blank">
	<button class="btn btn-square btn-neutral">
		<img class={width} src={icon} {alt} />
	</button>
</a>
