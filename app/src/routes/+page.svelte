<script>
	import MainLayout from '$lib/MainLayout.svelte';
</script>

<svelte:head>
	<title>Johannes Döllinger</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<MainLayout>
	<div class="pb-3">
		<h2 class="text-2xl pb-2">About Me</h2>
		<p>
			I'm making <a
				class="link text-lime-600 hover:text-lime-800"
				href="https://www.bosch.com/research/"
			>
				Bosch Research</a
			>
			more digital by building developer tools for common developer tasks, coaching my team so everyone
			has the right context to work effectively, and mentoring researchers to improve their software
			skills.
			<br />
			More generally, I enjoy connecting humans, by giving structure to source code, user interfaces,
			and people.
		</p>
	</div>

	<h2 class="text-xl">What I'm Doing</h2>

	<div class="grid md:grid-cols-2 gap-2">
		<div class="card shadow-md">
			<div class="card-body">
				<h3 class="text-lg font-semibold">Full-Stack Software Engineering</h3>

				<p>
					Modern web development using Python, Clean Code, Clean Architecture, and Continuous
					Delivery.
				</p>
			</div>
		</div>

		<li class="card shadow-md">
			<div class="card-body">
				<h3 class="text-lg font-semibold">Solution Architecture</h3>

				<p>
					Learning from our users how they use our software and how we can improve it. Ensuring the
					software I contribute to is easy and fun to use.
				</p>
			</div>
		</li>

		<div class="card shadow-md">
			<div class="card-body">
				<h3 class="text-lg font-semibold">Agile Coaching</h3>

				<p>
					Figuring out which Agile Methods work well for which team. Making costs of social friction
					transparent so it can be prioritized accordingly.
				</p>
			</div>
		</div>

		<li class="card shadow-md">
			<div class="card-body">
				<h3 class="text-lg font-semibold">Mentoring</h3>

				<p>
					Sharing my software development experience so others don't have to repeat many of my own
					mistakes.
				</p>
			</div>
		</li>
	</div>
</MainLayout>
