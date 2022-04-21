<script>
  import Banner from '$lib/banner/Banner.svelte';
  import { query } from '$lib/stores/query';

  $: summoners = $query?.snapshots || [];

  $: completed = $query?.complete;
  $: error = $query?.error;

  $: {
    console.log(error);
  }
</script>

<!--<div class="inline-flex justify-start xl:(justify-center flex) items-start mx-5">-->
<div
  class="flex flex-col items-center xl:(flex-row justify-center items-start) mb-10"
>
  {#each summoners as summoner}
    <div class="ml-5 first:ml-0">
      <Banner {summoner} />
    </div>
  {/each}
</div>
<div
  class="fixed position-center mb-2 badge"
  class:badge-green={completed}
  class:badge-red={error}
  class:badge-yellow={!(completed || error)}
>
  {#if error}
    {error}
  {:else if completed}
    Query completed!
  {:else}
    Fetching matches...
  {/if}
</div>

<!--
<div class="absolute bottom-4 left-1/2 badge badge-yellow">{$query.message}</div>
-->
<style>
  .position-center {
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  }
</style>
