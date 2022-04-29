<script lang="ts">
  import { ddragonVersion } from "$lib/stores/ddragonVersion";

  export let itemId: number;
</script>

{#if itemId === 0}
  <span />
{:else}
  <img src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/{itemId}.png" alt="" />
{/if}
