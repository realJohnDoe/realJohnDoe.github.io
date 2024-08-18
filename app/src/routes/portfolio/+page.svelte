<script>
	import MainLayout from '$lib/MainLayout.svelte';
	import kenpoImg from '$lib/images/kenpo-notes.png';
	import feelbackImg from '$lib/images/feelback-summary.png';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<MainLayout>
	<h2 class="text-2xl pb-3">Portfolio</h2>

	<div class="grid sm:grid-cols-2 gap-2">
		<a href="https://realjohndoe.github.io/kenpo-quartz/" target="_blank">
			<div class="card shadow-md">
				<figure>
					<img src={kenpoImg} alt="kenpo" loading="lazy" />
				</figure>
				<div class="card-body">
					<h3 class="text-lg font-semibold">Kenpo Notes</h3>
					<p class="project-category">Structuring my Dojo's Kenpo Content</p>
				</div>
			</div>
		</a>
		<a
			href="https://play.google.com/store/apps/details?id=com.johndoe_software.feelback"
			target="_blank"
		>
			<div class="card shadow-md">
				<figure>
					<img src={feelbackImg} alt="feelback" loading="lazy" />
				</figure>

				<div class="card-body">
					<h3 class="text-lg font-semibold">Feelback</h3>
					<p class="project-category">Privacy-friendly Emotion Tracker for Android</p>
				</div>
			</div>
		</a>
	</div>
</MainLayout>
