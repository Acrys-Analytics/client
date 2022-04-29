<script lang="ts">
  export let options: string[] = [];
  export let placeholder: string = "";

  export let selected = placeholder ? null : options[0];

  let open: boolean = false;
  let menu = null;

  function select(option: string) {
    selected = option;
    open = false;
  }

  function handleOutsideClick(event) {
    if (open && !menu.contains(event.target)) {
      open = false;
    }
  }

  function handleEscape(event) {
    if (open && event.key === "Escape") {
      open = false;
    }
  }
</script>

<svelte:window on:click={handleOutsideClick} on:keydown={handleEscape} />

<div class="relative inline-block text-left" bind:this={menu}>
  <button type="button" class="select outline-none text-white" aria-expanded="true" aria-haspopup="true" on:click={() => (open = !open)}>
    {selected || placeholder}
    <svg class="-mr-1 ml-2 h-5 w-5 fill-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  {#if open}
    <div
      class="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-base-100 border-1 border-base-200"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="p-2" role="none">
        {#each options as option}
          <span
            href="#"
            class="text-content cursor-pointer block rounded-md px-4 py-2 text-sm hover:(bg-white text-base-100)"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
            on:click={() => select(option)}>{option}</span
          >
        {/each}
      </div>
    </div>
  {/if}
</div>

<style windi:preflights>
</style>
