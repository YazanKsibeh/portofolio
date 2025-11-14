<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let y;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function goBottom() {
		window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
	}
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
	<div class="fixed right-6 bottom-6 flex flex-col gap-12 z-[10]">
		<button
			on:click={goTop}
			class="scroll-nav-btn rounded-full w-12 h-12 border-2 border-violet-400 bg-transparent hover:border-violet-300 text-violet-400 hover:text-violet-300 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
			aria-label="Scroll to top"
		>
			<span class="text-2xl font-bold leading-none">^</span>
		</button>
		<button
			on:click={goBottom}
			class="scroll-nav-btn rounded-full w-12 h-12 border-2 border-violet-400 bg-transparent hover:border-violet-300 text-violet-400 hover:text-violet-300 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
			aria-label="Scroll to bottom"
		>
			<span class="text-2xl font-bold leading-none">v</span>
		</button>
	</div>
	<Header {y} />
	<slot />
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind.innerHeight bind:innerWidth />
