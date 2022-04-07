<script lang="ts">
	import Match from './Match.svelte';
	import type { Role } from '$lib/league/roles.constants';

	interface Match {
		id: string;
		win: boolean;
		kills: number;
		deaths: number;
		assists: number;
		championId: number;
		championName: string;
		championLevel: number;
		visionscore: number;
		position: Role;
		spell1: string;
		spell2: string;
		rune1: string;
		rune2: string;
		items: number[];
	}

	export let matches: Match[] = [];
</script>

<div class="flex flex-col items-center text-xs mt-6">
	<span class="my-4">Matchhistory</span>
	<div class="flex">
		{#each matches as match (match.id)}
			<Match {...match} />
		{/each}
	</div>
</div>

<style>
</style>
