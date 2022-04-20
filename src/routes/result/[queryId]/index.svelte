<script>
  import Banner from "$lib/banner/Banner.svelte";
  import { query } from "$lib/stores/query";

  $: summoners = $query?.snapshots || [];
</script>

<!--<div class="inline-flex justify-start xl:(justify-center flex) items-start mx-5">-->
{#if $query?.error}
  <div class="w-full h-full flex justify-center items-center">
    <div class="badge badge-red">{$query.error}</div>
  </div>
{:else}
  <div
    class="flex flex-col items-center xl:(flex-row justify-center items-start) mb-5"
  >
    {#each summoners as summoner}
      <div class="ml-5 first:ml-0">
        <Banner {summoner} />
      </div>
    {/each}
  </div>
{/if}
<!--
<div class="absolute bottom-4 left-1/2 badge badge-yellow">{$query.message}</div>
-->
