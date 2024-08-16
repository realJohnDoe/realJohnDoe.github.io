<script>
	import TopPart from '$lib/TopPart.svelte';
	import kenpoImg from '$lib/images/kenpo-notes.png';
	import feelbackImg from '$lib/images/feelback-summary.png';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="text-column">
	<TopPart />

	<article class="portfolio" data-page="portfolio">
		<header>
			<h2 class="h2 article-title">Portfolio</h2>
		</header>

		<section class="projects">
			<ul class="project-list">
				<li class="project-item active" data-filter-item data-category="web development">
					<a href="https://realjohndoe.github.io/kenpo-quartz/">
						<figure class="project-img">
							<div class="project-item-icon-box">
								<ion-icon name="eye-outline"></ion-icon>
							</div>

							<img src="./assets/images/kenpo-notes.png" alt="kenpo" loading="lazy" />
						</figure>

						<h3 class="project-title">Kenpo Notes</h3>

						<p class="project-category">Structuring my Dojo's Kenpo Content</p>
					</a>
				</li>

				<li class="project-item active" data-filter-item data-category="web development">
					<a href="https://play.google.com/store/apps/details?id=com.johndoe_software.feelback">
						<figure class="project-img">
							<div class="project-item-icon-box">
								<ion-icon name="eye-outline"></ion-icon>
							</div>

							<img src="./assets/images/feelback-summary.png" alt="feelback" loading="lazy" />
						</figure>

						<h3 class="project-title">Feelback</h3>

						<p class="project-category">Privacy-friendly Emotion Tracker for Android</p>
					</a>
				</li>
			</ul>
		</section>
	</article>
</section>
