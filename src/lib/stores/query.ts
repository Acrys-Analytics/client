import { browser } from "$app/env";
import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";
import { derived, writable, type Readable, type Writable } from "svelte/store";

type QueryStore = AnalyzedQueriesDTOs.AnalyzedQuery | null;

export const queryId = writable("");

export const query: Readable<QueryStore> = derived<Writable<string>, QueryStore>(queryId, ($queryId, set) => {
  if (browser && $queryId) {
    set(null);

    const eventSource = new EventSource(`${import.meta.env.VITE_BACKEND_PATH}/query/${$queryId}/sse`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.complete) {
        eventSource.close();
      }

      set(data);
    };

    return () => {
      eventSource.close();
    };
  }
});
