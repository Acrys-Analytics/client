<script lang="ts">
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";
  import { Position } from "$lib/types/dto/PrismaTypes";
  import ChampionPool from "./ChampionPool.svelte";
  import MatchList from "./MatchList.svelte";
  import ProfileOverview from "./ProfileOverview.svelte";

  export let summoner: AnalyzedQueriesDTOs.AnalyzedSnapshot;

  $: mostPlayedChampion = summoner.championPool[0]?.championName || "";

  $: mostPlayedPosition = summoner.mostPlayedPosition[0];
  $: position = Position[summoner.clashPosition || mostPlayedPosition?.position] || Position.FILL;
  $: positionData = summoner.mostPlayedPosition && summoner.mostPlayedPosition.find((value) => value.position === position);

  $: gamesPlayedWithPosition = positionData && summoner.mostPlayedPosition?.length > 0 ? positionData.count : 0;

  $: globalWinrate = ((summoner.globalStats?.wins / summoner.globalStats?.totalGames) * 100).toFixed(2);
</script>

<div class="min-w-[360px] flex flex-col relative">
  {#if summoner.clashPosition && summoner.clashPosition !== mostPlayedPosition?.position && mostPlayedPosition?.position !== Position.FILL}
    <div class="absolute top-2 right-2 flex bg-base-300 p-2 rounded-[5px]">
      <span class="text-red text-xs mr-1">Most played Position: <span class="text-yellow">{mostPlayedPosition?.position}</span></span>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" fill="none" viewBox="0 0 18 15">
        <path stroke="#FB2841" stroke-width="1.773" d="M8.91 3.955v5.318m0 1.181v1.773M4.181 14l-2.364-2.364L7.728 1h2.363l5.91 10.636L13.635 14H4.182Z" />
      </svg>
    </div>
  {/if}
  <div class="h-48 bg-img" style="background-image: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{mostPlayedChampion}_0.jpg');" />
  <div class="-mt-5 card flex flex-col items-center">
    <ProfileOverview
      {position}
      profileIconId={summoner.summonerIconId}
      level={summoner.summonerLevel}
      tier={summoner.tier || "Unranked"}
      rank={summoner.rank || ""}
      leaguePoints={summoner.leaguePoints || 0}
      {gamesPlayedWithPosition}
    />
    <div class="my-4 flex flex-col justify-center items-center">
      <h1 class="text-white text-2xl">{summoner.summonerName}</h1>
      <span class="text-xs">{globalWinrate}% Winrate overall</span>
    </div>
    <ChampionPool champions={summoner.championPool} summonerTotalGames={summoner.participants.length} />
    <MatchList matches={summoner.participants} />
  </div>
</div>

<style>
  .bg-img {
    background-size: cover;
  }
</style>
