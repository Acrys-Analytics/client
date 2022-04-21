<script lang="ts">
  import ChampionStats from "$lib/league/ChampionStats.svelte";
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";

  export let champions: AnalyzedQueriesDTOs.Champion[] = [],
    summonerTotalGames: number = 0;
</script>

<div class="flex flex-col items-center text-xs">
  <span class="my-4">Most played champions</span>
  <div class="grid grid-cols-5 gap-y-4">
    {#each champions as champion (champion.championName)}
      <ChampionStats
        {champion}
        {summonerTotalGames}
        index={champions.indexOf(champion)}
      />
    {/each}
  </div>
</div>

<style>
</style>
