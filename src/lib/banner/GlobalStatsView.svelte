<script lang="ts">
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";

  export let globalStats: AnalyzedQueriesDTOs.GlobalStats;
</script>

<div class="flex flex-col w-full items-center text-xs mt-6">
  <span class="my-4">GlobalStats</span>
  <div class="flex flex-col">
    <div class="flex  justify-between">
      <span>Kills</span>
      <span>{globalStats.kills}</span>
    </div>
    <div class="flex justify-between">
      <span>Deaths</span>
      <span>{globalStats.deaths}</span>
    </div>
    <div class="flex justify-between">
      <span>Assists</span>
      <span>{globalStats.assists}</span>
    </div>
    <div class="flex justify-between">
      <span>Visionscore</span>
      <span>{globalStats.avgVisionScore.toFixed(2)}</span>
    </div>
    <div class="flex justify-between">
      <span>Wards bought</span>
      <span>{Math.round(globalStats.avgVisionWardsBought)}</span>
    </div>
    <div class="flex justify-between">
      <span>Creepscore</span>
      <span>{globalStats.avgCreepScore.toFixed(2)}</span>
    </div>
  </div>
</div>

<style>
</style>
