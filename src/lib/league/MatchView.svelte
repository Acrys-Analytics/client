<script lang="ts">
  import KdaIndecator from "$lib/league/KDAIndicator.svelte";
  import { ddragonVersion } from "$lib/stores/ddragonVersion";
  import ChampionPicture from "$lib/league/ChampionPicture.svelte";
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";

  export let match: AnalyzedQueriesDTOs.MatchParticipant;

  $: cappedPosition = match.position.slice(0, 3);
</script>

<div class="w-full flex flex-col">
  <div class="w-full flex justify-between items-baseline text-xs">
    {#if match.win}
      <span class="text-sm text-blue">Victory</span>
    {:else}
      <span class="text-sm text-red">Defeat</span>
    {/if}
    <span
      >KDA <KdaIndecator
        kills={match.kills}
        assists={match.assists}
        deaths={match.deaths}
      /></span
    >
    <span>LVL <span class="text-white">{match.championLevel}</span></span>
    <span>CS <span class="text-white">{match.creepScore}</span></span>
    <span>VS <span class="text-white">{match.visionScore}</span></span>
    <span>POS <span class="text-white">{cappedPosition}</span></span>
  </div>
  <div class="mt-1 grid items-grid gap-[12px] img-center">
    <ChampionPicture name={match.championName} />
    <span class="grid grid-cols-2 gap-1">
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/spell/{match
          .spells[0].image}"
        alt="S1"
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/img/{match.runes[0].image}"
        alt="R1"
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/spell/{match
          .spells[1].image}"
        alt="S2"
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/img/{match.runes[1].image}"
        alt="R2"
      />
    </span>
    <span class="grid grid-cols-4 gap-1">
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/{match
          .items[0]}.png"
        alt=""
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/{match
          .items[1]}.png"
        alt=""
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/{match
          .items[2]}.png"
        alt=""
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/3340.png"
        alt=""
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/{match
          .items[3]}.png"
        alt=""
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/{match
          .items[4]}.png"
        alt=""
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/{match
          .items[5]}.png"
        alt=""
      />
      <img
        src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/Zeri.png"
        alt=""
      />
    </span>
    <span class="flex justify-center items-center text-lg">
      <span>{match.kills}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="20"
        fill="none"
        viewBox="0 0 7 20"
      >
        <path
          stroke="#fff"
          stroke-opacity=".77"
          stroke-width="1.989"
          d="M1.047 19.04l4.175-17.9"
        />
      </svg>
      <span class="text-red">{match.deaths}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="20"
        fill="none"
        viewBox="0 0 7 20"
      >
        <path
          stroke="#fff"
          stroke-opacity=".77"
          stroke-width="1.989"
          d="M1.047 19.04l4.175-17.9"
        />
      </svg>
      <span>{match.assists}</span>
    </span>
  </div>
</div>

<style>
  .items-grid {
    grid-template-columns: 3.5rem 50px 104px auto;
  }

  .img-center img {
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
  }
</style>
