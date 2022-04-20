<script lang="ts">
  import MatchView from "$lib/league/MatchView.svelte";
  import type { Participant } from "$lib/types/dto/PrismaTypes";

  export let matches: Participant[] = [];
</script>

<div class="flex flex-col items-center text-xs mt-6">
  <span class="my-4">Matchhistory</span>
  <div class="grid grid-cols-1 gap-y-4">
    {#each matches as match (match.matchId)}
      <MatchView {match} />
    {/each}
  </div>
</div>

<style>
</style>
