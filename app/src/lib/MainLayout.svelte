<script>
	import { goto } from '$app/navigation';
	import img from '$lib/images/profile-photo.jpg';
</script>

<!-- <div class="flex flex-col items-center gap-8 bg-base-100"> -->
<div class="md:pt-6 flex flex-col gap-4 lg:gap-8">
	<div class="flex flex-col md:flex-row w-full">
		<figure class="md:w-64">
			<img src={img} alt="Johannes Döllinger" class="rounded-xl" />
		</figure>

		<div class="pg-4 lg:pt-8 md:pt-0 md:ps-4 lg:ps-8 grow">
			<div class="card shadow-md h-full">
				<div class="card-body grid grid-cols-1 content-center">
					<div class="flex flex-col">
						<h2 class="text-2xl">Johannes Döllinger</h2>
						<div class="flex flex-col lg:flex-row gap-2">
							<div class="badge badge-primary h-6 rounded-md">Web Developer</div>
							<div class="badge badge-primary h-6 rounded-md">Solution Architect</div>
							<div class="badge badge-primary h-6 rounded-md">Agile Coach</div>
						</div>
					</div>
					<div class="divider"></div>

					<div class="flex flex-col lg:flex-row gap-5">
						<div class="grow">
							<div>
								<ion-icon name="mail-outline"></ion-icon>
							</div>

							<p class="contact-title">Email</p>

							<a href="mailto:johannes.doellinger@gmail.com" class="link"
								>johannes.doellinger@gmail.com</a
							>
						</div>

						<div class="grow">
							<div class="icon-box">
								<ion-icon name="location-outline"></ion-icon>
							</div>

							<p class="contact-title">Location</p>

							<address>Esslingen, Germany</address>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card shadow-xl flex flex-col">
		<div class="grid justify-items-center">
			<div class="join grid grid-cols-3 w-full rounded-b-none shadow-sm">
				<button class="join-item btn" on:click={() => goto('./')}>About</button>
				<button class="join-item btn" on:click={() => goto('./resume')}
					><a href="/resume">Resume</a></button
				>
				<button class="join-item btn" on:click={() => goto('./portfolio')}
					><a href="/portfolio">Portfolio</a></button
				>
			</div>
		</div>
		<div class="card-body">
			<slot />
		</div>
	</div>
</div>
<!-- </div> -->
