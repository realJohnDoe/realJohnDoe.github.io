<script>
	import { base } from '$app/paths';

	const year = new Date().getFullYear();
</script>

<footer
	class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1 pt-2 text-sm opacity-70"
>
	<span>© {year} Johannes Döllinger</span>

	<div class="flex gap-4">
		<a class="link-accent" href="{base}/blog/">Blog</a>
		<a class="link-accent" href="https://github.com/realJohnDoe" target="_blank" rel="noreferrer">
			GitHub
		</a>
		<a
			class="link-accent"
			href="https://www.linkedin.com/in/johannesdoellinger/"
			target="_blank"
			rel="noreferrer"
		>
			LinkedIn
		</a>
	</div>
</footer>
