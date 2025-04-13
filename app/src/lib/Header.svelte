<script>
	import profilePhoto from '$lib/images/profile.jpg';
	import mailIconColored from '$lib/images/mail-colored.svg';
	import githubIconColored from '$lib/images/github-colored.svg';
	import gitLabIconColored from '$lib/images/gitlab-colored.svg';

	import obsidianIconColored from '$lib/images/obsidian-colored.svg';
	import pythonIconColored from '$lib/images/python-colored.svg';
	import githubActionsIconColored from '$lib/images/githubactions-colored.svg';
	import miroIconColored from '$lib/images/miro-colored.svg';
	import databricksIconColored from '$lib/images/databricks-colored.svg';
	import TechButton from './TechButton.svelte';
</script>

<div class="flex flex-col lg:flex-row w-full">
	<figure class="lg:w-96 shadow-xl w-fit rounded-xl pb-4 lg:pb-0">
		<img src={profilePhoto} alt="Johannes Döllinger" class="rounded-xl" />
	</figure>

	<div class=" md:pt-0 lg:ps-4 lg:ps-8 grow">
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
					<TechButton
						tech="Mail"
						link="mailto:johannes.doellinger@gmail.com"
						icon={mailIconColored}
						alt="Mail"
						width="w-6"
					/>
					<TechButton
						tech="GitHub"
						link="https://github.com/realJohnDoe"
						icon={githubIconColored}
						alt="GitHub"
						width="w-6"
					/>
					<TechButton
						tech="GitLab"
						link="https://gitlab.com/jdcoding"
						icon={gitLabIconColored}
						alt="GitLab"
						width="w-7"
					/>
				</div>

				<div class="pt-2">Technologies I am Mastering:</div>

				<div class="flex gap-3">
					<TechButton
						tech="Obsidian"
						link="https://obsidian.md/"
						icon={obsidianIconColored}
						alt="Obsidian"
						width="w-7"
					/>
					<TechButton
						tech="Python"
						link="https://docs.python.org/3/"
						icon={pythonIconColored}
						alt="Python"
						width="w-7"
					/>
					<TechButton
						tech="GitHub Actions"
						link="https://docs.github.com/actions"
						icon={githubActionsIconColored}
						alt="GitHub Actions"
						width="w-6"
					/>
					<TechButton
						tech="Databricks"
						link="https://learn.microsoft.com/de-de/azure/databricks/"
						icon={databricksIconColored}
						alt="Databricks"
						width="w-6"
					/>
					<TechButton
						tech="Miro"
						link="https://miro.com"
						icon={miroIconColored}
						alt="Miro"
						width="w-7"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
