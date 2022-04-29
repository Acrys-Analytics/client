<script lang="ts">
  import { page } from "$app/stores";
  import { queryId } from "$lib/stores/query";
  import { onMount } from "svelte";

  onMount(() => {
    queryId.set($page.params.queryId);
  });
</script>

<slot />
