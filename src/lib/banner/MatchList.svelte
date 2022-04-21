<script lang="ts">
  import MatchView from "$lib/league/MatchView.svelte";
  import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";

  export let matches: AnalyzedQueriesDTOs.MatchParticipant[] = [];
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
