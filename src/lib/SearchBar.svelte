<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Dropdown from './Dropdown.svelte';

	let depth = 50;
	let searchInput = null;

	const regions = ['BR', 'EUN', 'EUW', 'JP', 'KR', 'LA', 'NA', 'OC', 'TR', 'RU'];

	function onEnter(e) {
		if (e.key === 'Enter') {
			redirect();
		}
	}

	function redirect() {
		goto('/result/test');
	}

	function filterDepth() {
		if (this.value > 100) {
			this.value = 100;
		}

		let newValue = this.value.match(/^[1-9][0-9]?$|^100$/);
		this.value = (newValue && newValue[0]) || '';
	}

	onMount(() => {
		searchInput.focus();
	});
</script>

<div
	class="w-full rounded-lg flex items-center bg-gradient-to-r from-base-200 to-base-300 border-1 border-base-400 h-12"
>
	<div class="h-full flex items-center border-0 border-r-1 border-base-400 px-3">
		<Dropdown options={['Player', 'Clash']} />
		<span class="mx-1" />
		<Dropdown options={regions} placeholder="Region" />
	</div>
	<input
		type="text"
		placeholder="Playername"
		class="flex-1 h-full px-3 bg-transparent placeholder-content focus:outline-none"
		on:keydown={onEnter}
		bind:this={searchInput}
	/>
	<button
		class="px-4 py-3 text-content transition duration-200 ease-in-out bg-transparent cursor-pointer focus:outline-none hover:bg-base-200"
		on:click={redirect}
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
			<path
				stroke="url(#paint0_linear_4_12)"
				stroke-opacity=".77"
				stroke-width="2.5"
				d="M13 13l-2 2H6l-4-4V6l4-4h5l4 4v5l-2 2zm0 0l4 4 4 4"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_4_12"
					x1="2.5"
					x2="26"
					y1="1"
					y2="20.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#28C8FB" />
					<stop offset="1" stop-color="#28C8FB" stop-opacity=".6" />
				</linearGradient>
			</defs>
		</svg>
	</button>
	<input
		type="text"
		placeholder="Depth"
		on:input={filterDepth}
		on:keydown={onEnter}
		bind:value={depth}
		class="w-18 bg-transparent placeholder-content border-0 border-l-1 border-base-400 h-full text-center focus:outline-none focus:bg-transparent"
	/>
</div>
