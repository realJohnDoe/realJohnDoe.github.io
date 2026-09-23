<script>
	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="lg:p-2 lg:py-6 flex flex-col gap-4 lg:gap-8">
	{@render children()}
</div>
