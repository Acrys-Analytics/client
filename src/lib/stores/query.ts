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
    /*let keepAliveTimer: NodeJS.Timeout | undefined;
    getActivity();

    function getActivity() {
      if (keepAliveTimer !== null) clearTimeout(keepAliveTimer);
      keepAliveTimer = setTimeout(reconnect, 30 * 1000);
    }*/

    function reconnect() {
      eventSource.close();
      eventSource = new EventSource(`${import.meta.env.VITE_BACKEND_PATH}/query/${$queryId}/sse`);
    }

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.complete) {
        //if (keepAliveTimer !== null) clearTimeout(keepAliveTimer);
        eventSource.close();
      } /*else {
        getActivity();
      }*/

      set(data);
    };

    eventSource.onerror = (event) => {
      console.log("Got error! Reconnecting...");
      timeout = setTimeout(() => reconnect(), 1000);
    };
  }
});
