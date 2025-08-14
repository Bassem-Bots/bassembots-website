<script lang="ts">
	import { page } from '$app/state';
	import { getProject } from '$lib/data/projects';
	const { id } = $derived(page.params);
	const project = $derived(id ? getProject(id) : undefined);
	const headTitle = $derived(
		project ? `${project.title} • BassemBots` : 'Project Not Found • BassemBots'
	);
	const headDescription = $derived(
		project ? project.description : 'The project you are looking for does not exist.'
	);
	const gallery = $derived(project ? project.gallery : []);
	let activeIndex = $state(0);
	const currentMedia = $derived(gallery[activeIndex]);
	function isVideo(src: string) {
		return /\.(mp4|mov|webm|ogg)$/i.test(src);
	}
	function isImage(src: string) {
		return /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(src);
	}
	const posterImage = $derived(gallery.find(isImage));
	$effect(() => {
		if (activeIndex >= gallery.length) activeIndex = 0;
	});
</script>

<svelte:head>
	<title>{headTitle}</title>
	<meta name="description" content={headDescription} />
</svelte:head>
{#if !project}
	<div class="mx-auto max-w-3xl px-4 py-24 text-center text-neutral-300">
		<h1 class="text-2xl font-bold text-white">Project not found</h1>
		<p class="mt-2">
			The project you're looking for doesn't exist. Go back to <a
				href="/"
				class="text-blue-400 hover:text-blue-300">home</a
			>.
		</p>
	</div>
{:else}
	<header class="fixed top-4 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2">
		<div class="mx-4">
			<div
				class="flex h-12 items-center justify-between rounded-full border border-neutral-800/40 bg-neutral-900/60 px-4 backdrop-blur-xl"
			>
				<a href="/" class="text-sm font-semibold text-neutral-300 hover:text-white">← Back</a>
				<p class="text-sm text-neutral-400">BassemBots Project</p>
			</div>
		</div>
	</header>
	<main
		class="relative isolate bg-[radial-gradient(30rem_30rem_at_20%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(40rem_40rem_at_80%_0%,rgba(59,130,246,0.25),transparent)] pt-24"
	>
		<section class="relative isolate overflow-hidden border-b border-neutral-800/80 py-16">
			<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div class="grid items-start gap-10 lg:grid-cols-12">
					<div class="lg:col-span-7">
						<h1 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
							{project.title}
						</h1>
						<p class="mt-3 text-neutral-300">{project.longDescription}</p>
						<div class="mt-5 flex flex-wrap gap-2 text-xs text-neutral-300">
							<span class="rounded-full bg-neutral-800 px-2 py-0.5">{project.difficulty}</span>
							<span class="rounded-full bg-neutral-800 px-2 py-0.5">{project.status}</span>
						</div>
					</div>
					<div class="lg:col-span-5">
						<!-- Gallery viewer -->
						<div
							class="no-scrollbar overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 ring-1 ring-neutral-800 ring-inset"
						>
							{#if !gallery || gallery.length === 0}
								<div class="flex aspect-video items-center justify-center text-neutral-500">
									No media available
								</div>
							{:else}
								<div class="relative aspect-video">
									{#if isVideo(currentMedia)}
										<video
											class="h-full w-full object-cover"
											src={currentMedia}
											controls
											playsinline
											poster={posterImage}
										></video>
									{:else}
										<img
											class="h-full w-full object-cover"
											src={currentMedia}
											alt={`${project.title} media ${activeIndex + 1}`}
										/>
									{/if}
									{#if gallery.length > 1}
										<button
											type="button"
											aria-label="Previous"
											class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/60"
											onclick={() =>
												(activeIndex = (activeIndex - 1 + gallery.length) % gallery.length)}
											>&larr;</button
										>
										<button
											type="button"
											aria-label="Next"
											class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/60"
											onclick={() => (activeIndex = (activeIndex + 1) % gallery.length)}
											>&rarr;</button
										>
									{/if}
								</div>
							{/if}
						</div>
						{#if gallery && gallery.length > 1}
							<div class="mt-3 flex gap-2 overflow-x-auto">
								{#each gallery as media, i}
									<button
										type="button"
										class="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-1 ring-neutral-700 ring-inset hover:ring-neutral-500 focus:ring-2 focus:ring-blue-500 focus:outline-none {i ===
										activeIndex
											? 'ring-blue-500'
											: ''}"
										onclick={() => (activeIndex = i)}
										aria-current={i === activeIndex}
									>
										{#if isVideo(media)}
											<video src={media} class="h-full w-full object-cover" muted playsinline
											></video>
											<span class="absolute inset-0 bg-black/30"></span>
											<span
												class="absolute top-1 right-1 rounded bg-black/70 px-1 text-[10px] text-white"
												>Video</span
											>
										{:else}
											<img src={media} alt="" class="h-full w-full object-cover" />
										{/if}
									</button>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</section>

		<section class="border-b border-neutral-800/80 py-14">
			<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div class="grid gap-8 lg:grid-cols-3">
					<div class="space-y-6 lg:col-span-2">
						<h2 class="text-lg font-semibold text-white">Key Features</h2>
						<ul class="grid gap-3 text-neutral-300">
							{#each project.features as feat}
								<li class="flex items-start gap-2">
									<span class="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
									<span>{feat}</span>
								</li>
							{/each}
						</ul>
						<h2 class="mt-8 text-lg font-semibold text-white">Technologies</h2>
						<div class="flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span
									class="rounded-lg bg-neutral-800 px-3 py-1 text-sm text-neutral-200 ring-1 ring-neutral-700 ring-inset"
									>{tech}</span
								>
							{/each}
						</div>
					</div>
					<aside class="space-y-4">
						<div class="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
							<h3 class="text-sm font-semibold text-white">Project Info</h3>
							<dl class="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-300">
								<dt class="text-neutral-400">Status</dt>
								<dd class="col-span-2">{project.status}</dd>
								<dt class="text-neutral-400">Difficulty</dt>
								<dd class="col-span-2">{project.difficulty}</dd>
							</dl>
						</div>
						<div class="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
							<h3 class="text-sm font-semibold text-white">More Projects</h3>
							<div class="mt-3 grid gap-3">
								<a class="text-sm text-blue-400 hover:text-blue-300" href="/"
									>Browse all projects →</a
								>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	</main>
{/if}
