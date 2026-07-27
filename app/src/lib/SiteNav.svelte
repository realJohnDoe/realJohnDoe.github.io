<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const links = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/#experience`, label: 'Experience' },
		{ href: `${base}/#projects`, label: 'Projects' },
		{ href: `${base}/blog/`, label: 'Blog' }
	];

	$: pathname = $page.url.pathname.replace(/\/+$/, '') || '/';

	/**
	 * Section anchors count as "Home"; /blog also owns /blog/<slug>.
	 * @param {string} href
	 */
	function isActive(href) {
		const target = href.split('#')[0].replace(/\/+$/, '') || '/';
		if (href.includes('#')) return false;
		return target === '/' ? pathname === '/' : pathname.startsWith(target);
	}
</script>

<nav
	class="navbar bg-base-300 shadow-xl rounded-xl sticky top-2 z-30 min-h-0 gap-2 px-3 py-2 md:px-4"
	aria-label="Main"
>
	<a
		href="{base}/"
		class="flex-1 text-base md:text-lg font-semibold hover:text-accent transition-colors duration-200 truncate"
	>
		Johannes Döllinger
	</a>

	<ul class="flex items-center gap-0.5 sm:gap-1">
		{#each links as link}
			{@const active = isActive(link.href)}
			<li class={link.href.includes('#') ? 'hidden md:block' : ''}>
				<a
					href={link.href}
					aria-current={active ? 'page' : undefined}
					class="btn btn-ghost btn-sm rounded-md px-2 sm:px-3 font-normal"
					class:text-accent={active}
					class:font-semibold={active}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
