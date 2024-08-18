<script>
	import { goto } from '$app/navigation';
	import profilePhoto from '$lib/images/profile-photo.jpg';
	import mailIcon from '$lib/images/mail.svg';
	import gitHubIcon from '$lib/images/github.svg';
	import gitLabIcon from '$lib/images/gitlab.svg';
	import locationIcon from '$lib/images/location.svg';
</script>

<!-- <div class="flex flex-col items-center gap-8 bg-base-100"> -->
<div class="p-2 lg:py-6 flex flex-col gap-4 lg:gap-8">
	<div class="flex flex-col md:flex-row w-full">
		<figure class="lg:w-64 shadow-xl w-fit rounded-xl">
			<img src={profilePhoto} alt="Johannes Döllinger" class="rounded-xl" />
		</figure>

		<div class=" md:pt-0 md:ps-4 lg:ps-8 grow">
			<div class="card shadow-xl h-full">
				<div class="card-body grid grid-cols-1 content-center">
					<div class="flex flex-col">
						<h2 class="text-2xl pb-2">Johannes Döllinger</h2>
						<div class="flex flex-col lg:flex-row gap-2">
							<div class="badge badge-primary h-6 rounded-md">Full-Stack Software Engineer</div>
							<div class="badge badge-primary h-6 rounded-md">Solution Architect</div>
							<div class="badge badge-primary h-6 rounded-md">Agile Coach</div>
						</div>
					</div>
					<div class="divider"></div>

					<div class="flex gap-5">
						<a href="mailto:johannes.doellinger@gmail.com" target="_blank">
							<button class="btn btn-square btn-secondary shadow-xl">
								<img src={mailIcon} alt="Mail" />
							</button>
						</a>
						<a href="https://www.google.com/maps/place/Esslingen" target="_blank">
							<button class="btn btn-square btn-secondary shadow-xl">
								<img src={locationIcon} alt="Location" />
							</button>
						</a>
						<a href="https://github.com/realJohnDoe" target="_blank">
							<button class="btn btn-square btn-secondary shadow-xl">
								<img class="w-6" src={gitHubIcon} alt="Location" />
							</button>
						</a>
						<a href="https://gitlab.com/jdcoding" target="_blank">
							<button class="btn btn-square btn-secondary shadow-xl">
								<img src={gitLabIcon} alt="Location" class="w-7" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card shadow-xl flex flex-col">
		<div class="grid justify-items-center">
			<div class="join grid grid-cols-3 w-full rounded-b-none shadow-sm">
				<a href="./" data-sveltekit-noscroll>
					<button class="join-item btn w-full"> About </button>
				</a>
				<a href="/resume" data-sveltekit-noscroll>
					<button class="join-item btn w-full"> Resume </button>
				</a>
				<a href="/portfolio" data-sveltekit-noscroll>
					<button class="join-item btn w-full">Portfolio</button>
				</a>
			</div>
		</div>
		<div class="card-body">
			<slot />
		</div>
	</div>
</div>
<!-- </div> -->
