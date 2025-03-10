<script>
	import profilePhoto from '$lib/images/profile.jpg';
	import mailIcon from '$lib/images/mail.svg';
	import gitHubIcon from '$lib/images/github.svg';
	import gitLabIcon from '$lib/images/gitlab.svg';
	import locationIcon from '$lib/images/location.svg';
	import obsidianIcon from '$lib/images/obsidian.svg';
	import pythonIcon from '$lib/images/python.svg';
	import miroIcon from '$lib/images/miro.svg';
	import githubActionsIcon from '$lib/images/githubactions.svg';
	import databricksIcon from '$lib/images/databricks.svg';
</script>

<div class="flex flex-col md:flex-row w-full">
	<figure class="lg:w-96 shadow-xl w-fit rounded-xl">
		<img src={profilePhoto} alt="Johannes Döllinger" class="rounded-xl" />
	</figure>

	<div class=" md:pt-0 md:ps-4 lg:ps-8 grow">
		<div class="card shadow-xl h-full">
			<div class="card-body p-4 px-8 grid grid-cols-1 content-center">
				<div class="flex flex-col gap-2">
					<h2 class="text-2xl">Johannes Döllinger</h2>
					<div class="badge bg-accent h-6 rounded-md">Building Bridges and Giving Structure</div>
					<div class="flex flex-col lg:flex-row gap-2">
						<div class="badge bg-secondary h-6 rounded-md">Solution Architecture</div>
						<div class="badge bg-secondary h-6 rounded-md">Full-Stack Software Engineering</div>
					</div>
					<div class="flex flex-col lg:flex-row gap-2">
						<div class="badge bg-secondary h-6 rounded-md">Agile Coaching</div>
						<div class="badge bg-secondary h-6 rounded-md">Mentoring</div>
					</div>
				</div>
				<div class="pt-2">Contact me:</div>

				<div class="flex gap-3">
					<a href="mailto:johannes.doellinger@gmail.com" target="_blank">
						<button class="btn btn-square btn-primary"
							><img src={mailIcon} alt="Mail" class="w-6" />
						</button>
					</a>
					<a href="https://www.google.com/maps/place/Esslingen" target="_blank">
						<button class="btn btn-square btn-primary">
							<img src={locationIcon} alt="Location" class="w-6" />
						</button>
					</a>
					<a href="https://github.com/realJohnDoe" target="_blank">
						<button class="btn btn-square btn-primary">
							<img class="w-6" src={gitHubIcon} alt="Location" />
						</button>
					</a>
					<a href="https://gitlab.com/jdcoding" target="_blank">
						<button class="btn btn-square btn-primary">
							<img src={gitLabIcon} alt="Location" class="w-6" />
						</button>
					</a>
				</div>

				<div class="pt-2">Technologies I am Mastering:</div>

				<div class="flex gap-3">
					<a href="https://obsidian.md/" target="_blank">
						<button class="btn btn-square btn-primary">
							<img src={obsidianIcon} alt="Obsidian" class="w-6" />
						</button>
					</a>
					<a href="https://docs.python.org/3/" target="_blank">
						<button class="btn btn-square btn-primary">
							<img src={pythonIcon} alt="Python" class="w-6" />
						</button>
					</a>
					<a href="https://docs.github.com/actions" target="_blank">
						<button class="btn btn-square btn-primary">
							<img src={githubActionsIcon} alt="GitHub Actions" class="w-6" />
						</button>
					</a>
					<a href="https://miro.com" target="_blank">
						<button class="btn btn-square btn-primary">
							<img src={miroIcon} alt="Miro" class="w-7" />
						</button>
					</a>
					<a href="https://learn.microsoft.com/de-de/azure/databricks/" target="_blank">
						<button class="btn btn-square btn-primary">
							<img src={databricksIcon} alt="Databricks" class="w-6" />
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
