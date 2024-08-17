<script>
	import MainLayout from '$lib/MainLayout.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<MainLayout>
	<div class="card-body">
		<div class="pb-5">
			<h2 class="text-2xl pb-2">About Me</h2>
			<p>
				I'm a Software and DevOps Engineer from Esslingen, Germany, working for <a
					class="link link-accent"
					href="https://www.bosch.com/research/"
				>
					Bosch Research</a
				>.
				<br />
				I enjoy connecting humans, by giving structure to source code, communication, and user interfaces.
			</p>
		</div>

		<h2 class="text-xl">What i'm doing</h2>

		<div class="grid grid-cols-2 grid-cols-2 gap-2">
			<div class="card shadow-md">
				<div class="card-body">
					<h3 class="text-lg font-semibold">Software Engineering</h3>

					<p>
						Modern web development using Python, Clean Code, Clean Architecture, and Continuous
						Delivery.
					</p>
				</div>
			</div>

			<div class="card shadow-md">
				<div class="card-body">
					<h3 class="text-lg font-semibold">Agile Coaching</h3>

					<p>
						Figuring out which Agile Methods work well for which team. Making costs of social
						friction transparent so it can be prioritized accordingly.
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

			<li class="card shadow-md">
				<div class="card-body">
					<h3 class="text-lg font-semibold">User Experience</h3>

					<p>Ensuring the software I contribute to is easy and fun to use.</p>
				</div>
			</li>
		</div>
	</div>
</MainLayout>
