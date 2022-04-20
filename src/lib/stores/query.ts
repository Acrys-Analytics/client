import type { AnalyzedQueriesDTOs } from "$lib/types/dto/AnalyzedQueryDTO";
import { writable } from "svelte/store";

type QueryStore = AnalyzedQueriesDTOs.AnalyzedQuery | null;

function createQueryStore() {
  const { subscribe, set } = writable(null as QueryStore);

  return {
    subscribe,
    reset: () => set(null),
    set,
  };
}

export const query = createQueryStore();
