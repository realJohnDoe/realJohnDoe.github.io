<script>
	import { goto } from '$app/navigation';
	import img from '$lib/images/profile-photo.jpg';
</script>

<div class="flex flex-col gap-5">
	<div class="card sm:card-side bg-base-100 shadow-xl">
		<div class="rounded-full">
			<figure class="w-64">
				<img src={img} alt="Johannes Döllinger" />
			</figure>
		</div>
		<div class="card-body">
			<h2 class="text-2xl">Johannes Döllinger</h2>
			<div class="flex gap-2">
				<div class="badge badge-primary h-6 rounded-md">Web Developer</div>
				<div class="badge badge-primary h-6 rounded-md">Solution Architect</div>
				<div class="badge badge-primary h-6 rounded-md">Agile Coach</div>
			</div>
			<div class="divider"></div>
			<div class="flex flex-col lg:flex-row gap-5">
				<div class="grow">
					<div>
						<ion-icon name="mail-outline"></ion-icon>
					</div>

					<div class="grow">
						<p class="contact-title">Email</p>

						<a href="mailto:johannes.doellinger@gmail.com" class="link"
							>johannes.doellinger@gmail.com</a
						>
					</div>
				</div>

				<div class="grow">
					<div class="icon-box">
						<ion-icon name="location-outline"></ion-icon>
					</div>

					<div class="contact-info">
						<p class="contact-title">Location</p>

						<address>Esslingen, Germany</address>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card lg:card-side bg-base-100 shadow-xl">
		<div class="flex flex-col">
			<div class="grid justify-items-center">
				<div class="join grid grid-cols-3 lg:w-1/3 shadow-md rounded-t-none">
					<button class="join-item btn" on:click={() => goto('./')}>About</button>
					<button class="join-item btn" on:click={() => goto('./resume')}
						><a href="/resume">Resume</a></button
					>
					<button class="join-item btn" on:click={() => goto('./portfolio')}
						><a href="/portfolio">Portfolio</a></button
					>
				</div>
			</div>
			<slot />
		</div>
	</div>
</div>
