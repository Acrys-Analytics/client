<script>
	import { fly } from 'svelte/transition';
	import Logo from '$lib/Logo.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
</script>

<div class="w-full h-full flex justify-center items-center bg-img">
	<div class="w-1/2 flex flex-col items-center" in:fly={{ y: 100, duration: 1000 }}>
		<Logo />
		<div class="mt-5 mb-8 text-xl text-center text-white flex flex-col select-none">
			Statistical Analysis System for
			<span class="text-blue">League of Legends</span>
		</div>
		<SearchBar />
	</div>
</div>

<style>
	.bg-img {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/static/img/freljord.jpg');
	}
</style>
