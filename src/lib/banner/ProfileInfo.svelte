<script lang="ts">
	interface Stats {
		name: string;
		value: string;
	}

	export let stats: Stats[] = [];

	$: secondaryStats = stats.splice(1);
</script>

<div class="card flex item-center">
	<div class="flex-1 flex flex-col">
		<span>{stats[0].name}</span>
		<span class="ml-4 text-4xl text-white">{stats[0].value}</span>
	</div>
	<div class="flex-1 flex flex-col justify-center">
		{#each secondaryStats as stat}
			<div class="flex justify-between">
				<span>{stat.name}</span>
				<span class="text-white">{stat.value}</span>
			</div>
		{/each}
	</div>
</div>

<style windi:preflights>
</style>
