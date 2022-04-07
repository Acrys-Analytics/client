<script lang="ts">
	import ChampionStats from '$lib/league/ChampionStats.svelte';

	interface Champion {
		summonerTotalGames: number;
		championName: string;
		masteryLevel: number;
		used: number;
		wins: number;
		kills: number;
		deaths: number;
		assists: number;
	}

	export let champions: Champion[] = [];
</script>

<div class="flex flex-col items-center text-xs">
	<span class="my-4">Most played champions</span>
	<div class="flex">
		{#each champions as champion (champion.championName)}
			<ChampionStats {...champion} />
		{/each}
	</div>
</div>

<style>
</style>
