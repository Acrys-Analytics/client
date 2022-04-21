<script lang="ts">
  import { assets } from '$app/paths';

  export let level: number, points: number;

  function numberWithCommas(num, char) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char);
  }

  $: pointsWithCommas = numberWithCommas(points, ' ');
</script>

<div class="tooltip w-full">
  <img src="{assets}/img/mastery/{level}.png" alt="" class="select-none" />
  <span class="tooltiptext ">{pointsWithCommas} Pts.</span>
</div>

<style lang="postcss">
  /* Tooltip container */
  .tooltip {
    position: relative;
    display: inline-block;
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    @apply bg-base-100 border-base-400 border-1 text-white px-2 py-1 rounded-md;

    width: max-content;
    visibility: hidden;
    text-align: center;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
