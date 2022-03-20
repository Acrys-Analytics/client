<script lang="ts">
	export let stats = [
		{
			name: 'Ranked',
			value: 'MASTER IV'
		},
		{
			name: 'Winrate',
			value: '55.54%'
		},
		{
			name: 'Level',
			value: '123'
		}
	];
</script>

<div class="card flex item-center">
	<div class="flex-1 flex flex-col">
		<span>KDA</span>
		<span class="ml-4 text-4xl text-white">24.04</span>
	</div>
	<div class="flex-1 flex flex-col justify-center">
		{#each stats as stat}
			<div class="flex justify-between">
				<span>{stat.name}</span>
				<span class="text-white">{stat.value}</span>
			</div>
		{/each}
	</div>
</div>
