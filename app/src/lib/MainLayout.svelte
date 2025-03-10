<script>
	import { onMount } from 'svelte';

	let currentPath = '';

	onMount(() => {
		currentPath = window.location.pathname;
	});
</script>

<div class="md:p-2 lg:py-6 flex flex-col gap-4 lg:gap-8">
	<slot />
</div>
