<script>
	import profilePhoto from '$lib/images/profile.jpg';
	import mailIcon from '$lib/images/mail.svg';
	import mailIconColored from '$lib/images/mail-colored.svg';
	import gitHubIcon from '$lib/images/github.svg';
	import githubIconColored from '$lib/images/github-colored.svg';
	import gitLabIcon from '$lib/images/gitlab.svg';
	import gitLabIconColored from '$lib/images/gitlab-colored.svg';

	import obsidianIcon from '$lib/images/obsidian.svg';
	import obsidianIconColored from '$lib/images/obsidian-colored.svg';
	import pythonIcon from '$lib/images/python.svg';
	import pythonIconColored from '$lib/images/python-colored.svg';
	import githubActionsIcon from '$lib/images/githubactions.svg';
	import githubActionsIconColored from '$lib/images/githubactions-colored.svg';
	import miroIcon from '$lib/images/miro.svg';
	import miroIconColored from '$lib/images/miro-colored.svg';
	import databricksIcon from '$lib/images/databricks.svg';
	import databricksIconColored from '$lib/images/databricks-colored.svg';

	const colored_icons = true;

	const usedMailIcon = colored_icons ? mailIconColored : mailIcon;
	const usedGitHubIcon = colored_icons ? githubIconColored : gitHubIcon;
	const usedGitLabIcon = colored_icons ? gitLabIconColored : gitLabIcon;

	const usedObsidianIcon = colored_icons ? obsidianIconColored : obsidianIcon;
	const usedPythonIcon = colored_icons ? pythonIconColored : pythonIcon;
	const usedGitHubActionsIcon = colored_icons ? githubActionsIconColored : githubActionsIcon;
	const usedMiroIcon = colored_icons ? miroIconColored : miroIcon;
	const usedDatabricksIcon = colored_icons ? databricksIconColored : databricksIcon;
</script>

<div class="flex flex-col md:flex-row w-full">
	<figure class="lg:w-96 shadow-xl w-fit rounded-xl">
		<img src={profilePhoto} alt="Johannes Döllinger" class="rounded-xl" />
	</figure>

	<div class=" md:pt-0 md:ps-4 lg:ps-8 grow">
		<div class="card bg-base-200 shadow-xl h-full">
			<div class="card-body p-4 px-8 grid grid-cols-1 content-center">
				<div class="flex flex-col gap-2">
					<h2 class="text-2xl">Johannes Döllinger</h2>
					<div class="badge badge-accent h-6 rounded-md">Building Bridges and Giving Structure</div>
					<div class="flex flex-col lg:flex-row gap-2">
						<div class="badge badge-secondary h-6 rounded-md">Solution Architecture</div>
						<div class="badge badge-secondary h-6 rounded-md">Full-Stack Software Engineering</div>
					</div>
					<div class="flex flex-col lg:flex-row gap-2">
						<div class="badge badge-secondary h-6 rounded-md">Agile Coaching</div>
						<div class="badge badge-secondary h-6 rounded-md">Mentoring</div>
					</div>
				</div>
				<div class="pt-2">Contact me:</div>

				<div class="flex gap-3">
					<a href="mailto:johannes.doellinger@gmail.com" target="_blank">
						<button class="btn btn-square btn-neutral"
							><img src={usedMailIcon} alt="Mail" class="w-6" />
						</button>
					</a>
					<a href="https://github.com/realJohnDoe" target="_blank">
						<button class="btn btn-square btn-neutral">
							<img class="w-6" src={usedGitHubIcon} alt="GitHub" />
						</button>
					</a>
					<a href="https://gitlab.com/jdcoding" target="_blank">
						<button class="btn btn-square btn-neutral">
							<img src={usedGitLabIcon} alt="GitLab" class="w-7" />
						</button>
					</a>
				</div>

				<div class="pt-2">Technologies I am Mastering:</div>

				<div class="flex gap-3">
					<a href="https://obsidian.md/" target="_blank">
						<button class="btn btn-square btn-neutral">
							<img src={usedObsidianIcon} alt="Obsidian" class="w-7" />
						</button>
					</a>
					<a href="https://docs.python.org/3/" target="_blank">
						<button class="btn btn-square btn-neutral">
							<img src={usedPythonIcon} alt="Python" class="w-7" />
						</button>
					</a>
					<a href="https://docs.github.com/actions" target="_blank">
						<button class="btn btn-square btn-neutral">
							<img src={usedGitHubActionsIcon} alt="GitHub Actions" class="w-6" />
						</button>
					</a>
					<a href="https://learn.microsoft.com/de-de/azure/databricks/" target="_blank">
						<button class="btn btn-square btn-neutral">
							<img src={usedDatabricksIcon} alt="Databricks" class="w-6" />
						</button>
					</a>
					<a href="https://miro.com" target="_blank">
						<button class="btn btn-square btn-neutral">
							<img src={usedMiroIcon} alt="Miro" class="w-7" />
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
