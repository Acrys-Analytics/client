<script>
	import Logo from '$lib/Logo.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
</script>

<div class="w-screen h-screen flex justify-center items-center">
	<div class="w-1/2 flex flex-col items-center">
		<Logo />
		<span class="mt-5 mb-8 text-xl text-center select-none">
			Statistical Analysis System for League of Legends
		</span>
		<SearchBar />
	</div>
</div>
