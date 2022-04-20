<script lang="ts">
	import { fly } from 'svelte/transition';
	import Logo from '$lib/Logo.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
	import { goto } from '$app/navigation';

	let error: string = '';

	async function sendCreateRequest(e) {
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_PATH}/query`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(e.detail)
			});

			if (response.ok) {
				const data = await response.json();

				goto(`/result/${data.queryId}`);
			}
		} catch (e) {
			console.error(e);
		}
	}
</script>

<div class="w-full h-full flex justify-center items-center bg-img">
	<div class="w-2/3 xl:w-1/2 flex flex-col items-center" in:fly={{ y: 100, duration: 1000 }}>
		<Logo />
		<div class="mt-5 mb-8 text-xl text-center text-white flex flex-col select-none">
			Statistical Analysis System for
			<span class="text-blue">League of Legends</span>
		</div>
		<SearchBar on:execute={sendCreateRequest} on:error={(e) => (error = e.detail)} />
		{#if error}
			<div class="mt-5 badge badge-red">
				Error: {error}
			</div>
		{/if}
	</div>
</div>

<style>
	.bg-img {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/static/img/freljord.jpg');
	}
</style>
