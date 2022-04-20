<script lang="ts">
  import { browser } from "$app/env";
  import { page } from "$app/stores";
  import { query } from "$lib/stores/query";
  import { onMount } from "svelte";

  onMount(() => {
    if (browser) {
      // Resetting query data
      query.reset();

      const eventSource = new EventSource(
        `${import.meta.env.VITE_BACKEND_PATH}/query/${$page.params.queryId}/sse`
      );

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.complete) {
          eventSource.close();
        }

        query.set(data);
      };

      return () => {
        eventSource.close();
      };
    }
  });
</script>

<slot />
