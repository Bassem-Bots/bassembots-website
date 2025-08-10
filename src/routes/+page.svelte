<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { projects } from '$lib/data/projects';

	const nav = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '#about' },
		{ label: 'Projects', href: '#projects' }
	];

	function firstImageFrom(gallery: string[]): string | undefined {
		return gallery.find((src) => /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(src) || src.startsWith('https://placehold.co'));
	}
</script>

<div 
  class="no-scrollbar min-h-screen" 
  style="background: radial-gradient(30rem 30rem at 20% 20%, rgba(59,130,246,0.25), transparent),
         radial-gradient(40rem 40rem at 80% 0%, rgba(59,130,246,0.25), transparent);">
	<header class="sticky top-5 z-50 mx-4 rounded-full border border-white/10 bg-white/5 px-4 backdrop-blur-md">
	<div class="mx-auto max-w-7xl">
		<div class="flex h-14 items-center justify-between">
			<a href="/" class="group inline-flex items-center gap-2">
				<div class="grid h-8 w-8 place-items-center">
					<img src="/logo.png" alt="BassemBots logo" class="h-8 w-8" />
				</div>
				<div class="text-left">
					<p class="text-xs font-semibold uppercase tracking-wider text-neutral-400">Alfajral Bassem</p>
					<p class="text-lg font-bold text-neutral-100">BassemBots</p>
				</div>
			</a>
			<nav class="hidden gap-6 md:flex">
				{#each nav as item}
					<a href={item.href} class="text-sm font-medium text-neutral-300 transition-colors hover:text-white">{item.label}</a>
				{/each}
			</nav>
		</div>
	</div>
</header>

<main class="relative isolate">
	<section class="relative isolate overflow-hidden border-b border-neutral-800/80 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-12">
				<div class="max-w-2xl space-y-6 lg:col-span-7">
					<h1 class="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">Build robots. Code solutions. Lead the future.</h1>
					<p class="text-lg leading-8 text-neutral-300">Welcome to BassemBots — the robotics club at Alfajral Bassem. We design, build, and program robots while learning teamwork, engineering, and leadership through competitions and real projects.</p>
					<div class="mt-6 flex items-center gap-6 text-sm text-neutral-400">
						<div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-blue-500"></span> Weekly meetings</div>
						<div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-blue-500"></span> Competitions</div>
						<div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-blue-500"></span> Workshops</div>
					</div>
				</div>
				<div class="lg:col-span-5">
					<div class="relative mx-auto aspect-square max-w-md bg-transparent p-6 ">
						<div class="absolute inset-0 -z-10 rounded-2xl bg-transparent"></div>
						<div class="grid h-full place-items-center">
							<img src="/logo.png" alt="BassemBots logo" class="h-full w-full text-blue-400/70" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="about" class="border-b border-neutral-800/80 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-start gap-12 lg:grid-cols-2">
				<div class="space-y-4">
					<h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">About BassemBots</h2>
					<p class="text-neutral-300">BassemBots is a club where members explore robotics, electronics, and coding. We work in teams to prototype ideas, build robots, and participate in regional events.</p>
					<ul class="grid gap-3 text-neutral-300 sm:grid-cols-2">
						<li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Hands-on builds</li>
						<li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Programming sessions</li>
						<li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Hardware + mechanics</li>
						<li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Teamwork & leadership</li>
					</ul>
				</div>
				<div class="rounded-2xl border border-neutral-800 p-6">
					<h3 class="mb-4 text-lg font-semibold text-white">What we use</h3>
					<div class="grid grid-cols-2 gap-4 text-sm text-neutral-300 sm:grid-cols-3">
						<div class="rounded-lg bg-neutral-800/60 px-3 py-2 ring-1 ring-inset ring-neutral-700">FTC SDK</div>
						<div class="rounded-lg bg-neutral-800/60 px-3 py-2 ring-1 ring-inset ring-neutral-700">Android Studio</div>
						<div class="rounded-lg bg-neutral-800/60 px-3 py-2 ring-1 ring-inset ring-neutral-700">3D Printing</div>
						<div class="rounded-lg bg-neutral-800/60 px-3 py-2 ring-1 ring-inset ring-neutral-700">Sensors</div>
						<div class="rounded-lg bg-neutral-800/60 px-3 py-2 ring-1 ring-inset ring-neutral-700">CAD</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="border-b border-neutral-800/80 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-10 flex items-end justify-between">
				<h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Club Projects</h2>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<a href={`/projects/${project.id}`} class="group rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition hover:border-neutral-600">
						<div class="aspect-video overflow-hidden rounded-lg ring-1 ring-inset ring-neutral-700">
							{#if firstImageFrom(project.gallery)}
								<img src={firstImageFrom(project.gallery)} alt={`${project.title} cover image`} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
							{:else}
								<div class="grid h-full w-full place-items-center bg-gradient-to-br from-neutral-800 to-neutral-700 text-neutral-300">
									<span class="rounded bg-black/50 px-2 py-1 text-xs">No image</span>
								</div>
							{/if}
						</div>
						<h3 class="mt-4 text-lg font-semibold text-white">{project.title}</h3>
						<p class="text-sm text-neutral-400">{project.description}</p>
						<div class="mt-3 flex items-center gap-2 text-xs text-neutral-400">
							<span class="rounded-full bg-neutral-800 px-2 py-0.5">{project.difficulty}</span>
							<span class="rounded-full bg-neutral-800 px-2 py-0.5">{project.status}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</main>

<footer class="border-t border-neutral-800 py-10 text-sm text-neutral-400">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
			<p>© {new Date().getFullYear()} BassemBots • Alfajral Bassem</p>
			<div class="flex items-center gap-4">
				<a class="hover:text-neutral-200" href="#about">About</a>
				<a class="hover:text-neutral-200" href="#projects">Projects</a>
			</div>
		</div>
	</div>
</footer>
</div>