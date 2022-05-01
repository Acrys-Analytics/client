import { browser } from "$app/env";
import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";
import { derived, writable, type Readable, type Writable } from "svelte/store";

type QueryStore = AnalyzedQueriesDTOs.AnalyzedQuery | null;

export const queryId = writable("");

export const query: Readable<QueryStore> = derived<Writable<string>, QueryStore>(queryId, ($queryId, set) => {
  if (browser && $queryId) {
    set(null);

    let eventSource = new EventSource(`${import.meta.env.VITE_BACKEND_PATH}/query/${$queryId}/sse`);
    let timeout: NodeJS.Timeout | undefined;

    function reconnect() {
      eventSource.close();
      eventSource = new EventSource(`${import.meta.env.VITE_BACKEND_PATH}/query/${$queryId}/sse`);
    }

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.complete) {
        eventSource.close();
      }

      set(data);
    };

    eventSource.onerror = (event) => {
      console.log("Got error! Reconnecting...");

      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => reconnect(), 1000);
    };
  }
});
