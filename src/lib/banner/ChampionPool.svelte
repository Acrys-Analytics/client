<script lang="ts">
	import ChampionStats from './ChampionStats.svelte';

	export let champions: [] = [];
</script>

<div class="card">
	<div>Championpool</div>
	<div class="mt-4 grid grid-cols-5 gap-x-3 gap-y-[18px] place-items-center">
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
		<ChampionStats />
	</div>
</div>

<style windi:preflights>
</style>
