<script>
	import '../app.css';
	import SiteFooter from '$lib/SiteFooter.svelte';
</script>

<div class="app">
	<main>
		<slot />
		<SiteFooter />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
