<script lang="ts">
  export let kills: number, deaths: number, assists: number;

  $: kda =
    deaths > 0
      ? Number(((kills + assists) / deaths).toFixed(2))
      : kills + assists;
</script>

<span
  class="text-content-100"
  class:text-blue={kda >= 1}
  class:text-yellow={kda >= 5}
  class:text-red={kda >= 10}>{kda}</span
>

<style>
</style>
