<script>
	import profilePhoto from '$lib/images/profile.jpg';
	import TechButton from './TechButton.svelte';
	import { techButtons } from './techButtons';
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
					<TechButton techButtonProps={techButtons.mail} />
					<TechButton techButtonProps={techButtons.linkedin} />
					<TechButton techButtonProps={techButtons.github} />
					<TechButton techButtonProps={techButtons.gitlab} />
				</div>

				<div class="pt-2">Technologies I am Mastering:</div>

				<div class="flex gap-3">
					<TechButton techButtonProps={techButtons.obsidian} />
					<TechButton techButtonProps={techButtons.python} />
					<TechButton techButtonProps={techButtons.githubActions} />
					<TechButton techButtonProps={techButtons.databricks} />
					<TechButton techButtonProps={techButtons.miro} />
				</div>
			</div>
		</div>
	</div>
</div>
