<script>
	import MainLayout from '$lib/MainLayout.svelte';
	import kenpoImg from '$lib/images/kenpo-notes.jpg';
	import feelbackImg from '$lib/images/feelback-summary.jpg';
	import prSizeImg from '$lib/images/pr-labels.jpg';
	import openIcon from '$lib/images/open.svg';
	import gitHubIcon from '$lib/images/github.svg';
	import gitLabIcon from '$lib/images/gitlab.svg';
</script>

<svelte:head>
	<meta name="description" content="About this app" />
</svelte:head>

<MainLayout>
	<h2 class="text-2xl pb-3">Portfolio</h2>

	<div class="grid sm:grid-cols-2 gap-2">
		<div class="card shadow-md">
			<figure>
				<img src={feelbackImg} alt="feelback" loading="lazy" />
			</figure>

			<div class="card-body">
				<div class="flex h-full">
					<div class="grow pe-5">
						<h3 class="text-lg font-semibold">Feelback</h3>
						<p class="project-category">Privacy-friendly Emotion Tracker for Android</p>
					</div>
					<div class="flex gap-2 items-end h-full">
						<a
							href="https://play.google.com/store/apps/details?id=com.johndoe_software.feelback"
							target="_blank"
						>
							<button class="btn btn-square bg-lime-600 hover:bg-lime-800 shadow-xl">
								<img src={openIcon} alt="Open Link" />
							</button>
						</a>
						<a href="https://gitlab.com/jdcoding/feelback" target="_blank">
							<button class="btn btn-square bg-lime-600 hover:bg-lime-800 shadow-xl">
								<img src={gitLabIcon} alt="GitLab" class="w-7" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card shadow-md h-full">
			<figure>
				<img src={kenpoImg} alt="kenpo" loading="lazy" />
			</figure>
			<div class="card-body">
				<div class="flex h-full">
					<div class="grow pe-5">
						<h3 class="text-lg font-semibold">Kenpo Notes</h3>
						<p class="project-category">Structuring my Dojo's Kenpo Content</p>
					</div>
					<div class="flex gap-2 items-end h-full">
						<a href="https://realjohndoe.github.io/kenpo-notes/" target="_blank">
							<button class="btn btn-square bg-lime-600 hover:bg-lime-800 shadow-xl">
								<img class="w-6" src={openIcon} alt="Location" />
							</button>
						</a>
						<a href="https://github.com/realJohnDoe/kenpo-quartz" target="_blank">
							<button class="btn btn-square bg-lime-600 hover:bg-lime-800 shadow-xl">
								<img class="w-6" src={gitHubIcon} alt="Location" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card shadow-md h-full">
			<figure>
				<img src={prSizeImg} alt="pr-size-labeler" loading="lazy" />
			</figure>
			<div class="card-body">
				<div class="flex h-full">
					<div class="grow pe-5">
						<h3 class="text-lg font-semibold">PR Size Labeler</h3>
						<p class="project-category">
							A GitHub Action to Label Pull Requests Depending on Their Size
						</p>
					</div>
					<div class="flex gap-2 items-end h-full">
						<a href="https://github.com/boschresearch/pr-size-labeler" target="_blank">
							<button class="btn btn-square bg-lime-600 hover:bg-lime-800 shadow-xl">
								<img class="w-6" src={gitHubIcon} alt="Location" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</MainLayout>
