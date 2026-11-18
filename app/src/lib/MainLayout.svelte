<script>
	/** @type {{children: import('svelte').Snippet, class?: string}} */
	let { children, class: className = '' } = $props();
</script>

<div class={['lg:p-2 lg:py-6 flex flex-col gap-4 lg:gap-8', className]}>
	{@render children()}
</div>
