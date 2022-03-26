<script lang="ts">
	import Match from './Match.svelte';

	export let matches = ['lol', 'lol', 'lol', 'lol', 'lol', 'lol', 'lol'];
</script>

<div class="card p-0">
	<div class="p-4">Matchhistory</div>
	<div class="pl-4 pr-[5px] pb-4 flex flex-col h-md overflow-y-scroll">
		{#each matches as match}
			<div class="mt-4 first:mt-0">
				<Match />
			</div>
		{/each}
	</div>
</div>
