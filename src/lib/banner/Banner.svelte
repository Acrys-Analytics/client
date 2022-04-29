<script lang="ts">
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";
  import { Position } from "$lib/types/dto/PrismaTypes";
  import ChampionPool from "./ChampionPool.svelte";
  import GlobalStatsView from "./GlobalStatsView.svelte";
  import MatchList from "./MatchList.svelte";
  import ProfileOverview from "./ProfileOverview.svelte";

  export let summoner: AnalyzedQueriesDTOs.AnalyzedSnapshot;

  $: mostPlayedChampion = summoner.championPool[0]?.championName || "";

  $: position = Position[summoner.clashPosition || summoner.mostPlayedPosition[0]?.position] || Position.FILL;

  $: gamesPlayedWithPosition = summoner.mostPlayedPosition.length > 0 ? summoner.mostPlayedPosition?.find((value) => value.position === position).count : 0;

  $: globalWinrate = ((summoner.globalStats?.wins / summoner.globalStats?.totalGames) * 100).toFixed(2);
</script>

<div class="min-w-[360px] flex flex-col">
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
