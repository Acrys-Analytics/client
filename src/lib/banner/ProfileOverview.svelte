<script lang="ts">
  import PositionIcon from "$lib/league/PositionIcon.svelte";

  import { ddragonVersion } from "$lib/stores/ddragonVersion";
  import type { Position } from "$lib/types/dto/PrismaTypes";

  export let profileIconId: number,
    level: number,
    tier: string,
    rank: string,
    leaguePoints: number = 0,
    position: Position,
    gamesPlayedWithPosition: number;

  $: tierLower = tier.toLowerCase();
</script>

<div class="w-full relative flex justify-between text-sm">
  <div
    class="h-[105px] w-[105px] inner-card flex flex-col justify-center items-center text-center"
  >
    <img class="w-12" src="/static/img/rank/{tierLower}.png" alt={tier} />
    <span>{tier} {rank}</span>
    <span class="text-{tierLower}-primary leading-none">{leaguePoints} LP</span>
  </div>
  <img
    class="h-28 w-28 inner-card p-0 border-{tierLower}-primary border-2 position-top"
    src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/profileicon/{profileIconId}.png"
    alt=""
  />
  <div
    class="position-level badge badge-{tierLower} bg-none bg-challenger-primary bg-opacity-10 text-white"
  >
    Level {level}
  </div>
  <div
    class="h-[105px] w-[105px] inner-card flex flex-col justify-center items-center text-center"
  >
    <PositionIcon {position} {tier} height="2rem" />
    <span class="mt-2">{position}</span>
    <span class="text-{tierLower}-primary leading-none"
      >{gamesPlayedWithPosition} Games</span
    >
  </div>
</div>

<style>
  .position-top {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  .position-level {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
  }
</style>
