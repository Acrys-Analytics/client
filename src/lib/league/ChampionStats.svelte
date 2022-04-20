<script lang="ts">
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";

  import ChampionPicture from "./ChampionPicture.svelte";

  export let champion: AnalyzedQueriesDTOs.Champion, summonerTotalGames: number;

  $: playRate = ((champion.used / summonerTotalGames) * 100).toFixed(2);
  $: losses = champion.used - champion.wins;
</script>

<span class="flex flex-col items-center mx-1">
  <!--
	<span
		class="text-content-200 text-lg leading-none"
		class:text-gold-primary={champions.indexOf(champion) === 0}
		class:text-silver-primary={champions.indexOf(champion) === 1}
		class:text-bronze-primary={champions.indexOf(champion) === 2}
		>{champions.indexOf(champion) + 1}.</span
	>
	-->
  <div class="my-2">
    <ChampionPicture name={champion.championName} />
  </div>
  <span class="text-white">{playRate}%</span>
  <span>({champion.wins}W {losses}N)</span>
  <!--<span><KdaIndicator {kills} {deaths} {assists} /> KDA</span>-->
</span>

<style>
</style>
