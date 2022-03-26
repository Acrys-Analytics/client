<script lang="ts">
	export let name: string = '';
	export let totalGamesPlayed: number;
	export let used: number;
	export let wins: number;
	export let kda: number;
</script>

<div class="flex flex-col gap-1 place-items-center">
	<img
		src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/{name}.png"
		alt={name || '?'}
		class="h-14 square flex justify-center items-center border-base-400 border-2 select-none"
	/>

	<div class="flex flex-col items-center">
		<div class="text-white">{(used / totalGamesPlayed) * 100 || 0}%</div>
		<div>({wins || '?'}S {totalGamesPlayed - wins || '?'}N)</div>
		<div><span class="text-content">{kda || '?'}</span> KDA</div>
	</div>
</div>

<style windi:preflights>
	.square {
		aspect-ratio: 1 / 1;
	}
</style>
