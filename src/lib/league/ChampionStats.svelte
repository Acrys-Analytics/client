<script lang="ts">
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";

  import ChampionPicture from "./ChampionPicture.svelte";
  import Mastery from "./Mastery.svelte";

  export let champion: AnalyzedQueriesDTOs.Champion,
    summonerTotalGames: number,
    index: number;

  $: playRate = ((champion.used / summonerTotalGames) * 100).toFixed(2);
  $: losses = champion.used - champion.wins;
</script>

<span class="flex flex-col items-center mx-1">
  <span
    class="text-content-200 text-lg leading-none mb-2"
    class:text-gold-primary={index === 0}
    class:text-silver-primary={index === 1}
    class:text-bronze-primary={index === 2}>{index + 1}.</span
  >
  <div class="mb-6 relative">
    <ChampionPicture name={champion.championName} />
    <div class="position-bot w-12">
      <Mastery level={champion.level} points={champion.points} />
    </div>
  </div>
  <span class="text-white">{playRate}%</span>
  <span>({champion.wins}W {losses}N)</span>
  <!--<span><KdaIndicator {kills} {deaths} {assists} /> KDA</span>-->
</span>

<style>
  .position-bot {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
  }
</style>
