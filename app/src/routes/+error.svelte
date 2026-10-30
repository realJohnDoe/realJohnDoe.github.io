<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — Johannes Döllinger</title>
</svelte:head>

<div class="lg:p-2 lg:py-6 flex flex-col gap-4 lg:gap-8">
	<div class="card bg-base-300 shadow-xl flex flex-col">
		<div class="card-body p-4 md:p-6">
			<h1 class="text-2xl pb-2">{page.status} — this page does not exist</h1>
			<p class="pb-3">{page.error?.message ?? 'Something went wrong.'}</p>
			<div class="flex gap-4">
				<a class="link-accent" href={resolve('/')}>Back to the homepage</a>
				<a class="link-accent" href="{resolve('/')}#writing">Read what I've written</a>
			</div>
		</div>
	</div>
</div>
