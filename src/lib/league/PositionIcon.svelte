<script lang="ts">
  import { Position } from "$lib/types/dto/PrismaTypes";

  export let position: Position;
  export let height: string = "20rem";
  export let tier: string = "unranked";

  $: tierLower = tier.toLowerCase();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  style="height: {height};"
  fill="none"
  viewBox="0 0 126 104"
>
  {#if position === Position.TOP}
    <path
      class="fill-{tierLower}-secondary"
      d="M114.988 104V12l-16 16v60h-60l-16 16h92z"
    />
    <path class="fill-{tierLower}-secondary" d="M78.988 40v28h-28V40h28z" />
    <path
      class="fill-{tierLower}-primary"
      d="M10.988 0h96l-20 20h-56v56l-20 20V0z"
    />
  {:else if position === Position.JUNGLE}
    <path
      class="fill-{tierLower}-primary"
      d="M17.988 27.588c9.397 13.084 12.837 21.973 12.59 43.247C44.604 81.074 52.387 87.515 65.694 104 77.998 75.488 63.28 35.33 36.96 1.225c10.026 21.877 12.173 33.603 11.012 53.739-7.407-14.086-14.461-19.693-29.985-27.376zM110.444 27.581c-21.464 12.076-31.4 32.068-30.956 60.235l18.485-16.393c-.265-19.624 3.118-28.905 12.471-43.842z"
    />
    <path
      class="fill-{tierLower}-secondary"
      d="M75.373 64.818c-.955-8.177-2.738-13.29-8.01-23.297C73.45 21.896 79.226 12.897 93.263 0 82.537 20.453 79.82 32.596 79.045 56.106c-1.792 1.828-2.707 3.252-3.672 8.712z"
    />
  {:else if position === Position.MIDDLE}
    <path
      class="fill-{tierLower}-primary"
      d="M31.988 104h-20V84l84-84h20v20l-84 84z"
    />
    <path
      class="fill-{tierLower}-secondary"
      d="M63.988 88l-16 16h68V36l-16 16v36h-36zM27.988 52l-16 16V0h68l-16 16h-36v36z"
    />
  {:else if position === Position.BOTTOM}
    <path
      class="fill-{tierLower}-secondary"
      d="M11.988 0v92l16-16V16h60l16-16h-92z"
    />
    <path class="fill-{tierLower}-secondary" d="M47.988 64V36h28v28h-28z" />
    <path
      class="fill-{tierLower}-primary"
      d="M115.988 104h-96l20-20h56V28l20-20v96z"
    />
  {:else if position === Position.UTILITY}
    <path
      class="fill-{tierLower}-secondary"
      d="M51.235 33.879l-7.97 25.24-17.572-7.337L36.562 37.11C20.039 37.553 12.329 33.636 0 22.829h40.124l11.11 11.05zM73.589 33.879l7.843 25.24 17.29-7.337L88.027 37.11c16.258.444 23.846-3.473 35.977-14.28H84.521L73.59 33.879z"
    />
    <path
      class="fill-{tierLower}-primary"
      d="M62.502 41.477l-3.484-3.915-11.215 55.06L62.502 104l14.464-11.379-11.036-55.06-3.428 3.916zM62.502 29.207L44.02 7.326 48.138 0h28.498l4.052 7.326-18.186 21.881z"
    />
  {/if}
</svg>
