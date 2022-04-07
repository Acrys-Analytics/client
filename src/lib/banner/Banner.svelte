<script lang="ts">
	import ChampionPool from './ChampionPool.svelte';
	import MatchList from './MatchList.svelte';
	import ProfileOverview from './ProfileOverview.svelte';
	import { Role } from '$lib/league/roles.constants';

	export let name: string = 'Name';
	export let winrate: number = 0;
</script>

<div class="min-w-[360px] flex flex-col">
	<div class="h-48 bg-champ-img" />
	<div class="-mt-5 card flex flex-col items-center">
		<ProfileOverview role={Role.JUNGLE} tier="Master" rank="I" />
		<div class="my-4 flex flex-col justify-center items-center">
			<h1 class="text-white text-2xl">{name}</h1>
			<span class="text-xs">{winrate}% Winrate overall</span>
		</div>
		<ChampionPool
			champions={[
				{
					championName: 'Zeri',
					masteryLevel: 5,
					summonerTotalGames: 40,
					used: 4,
					wins: 2,
					kills: 23,
					deaths: 5,
					assists: 23
				},
				{
					championName: 'TahmKench',
					masteryLevel: 5,
					summonerTotalGames: 40,
					used: 4,
					wins: 2,
					kills: 23,
					deaths: 5,
					assists: 23
				},
				{
					championName: 'Xayah',
					masteryLevel: 5,
					summonerTotalGames: 40,
					used: 4,
					wins: 2,
					kills: 23,
					deaths: 5,
					assists: 23
				},
				{
					championName: 'Rakan',
					summonerTotalGames: 65,
					masteryLevel: 5,
					used: 4,
					wins: 2,
					kills: 23,
					deaths: 5,
					assists: 23
				},
				{
					championName: 'Garen',
					masteryLevel: 5,
					summonerTotalGames: 40,
					used: 4,
					wins: 2,
					kills: 23,
					deaths: 5,
					assists: 23
				}
			]}
		/>
		<MatchList
			matches={[
				{
					id: '1',
					championId: 2,
					championName: 'Zeri',
					championLevel: 12,
					win: true,
					kills: 99,
					deaths: 46,
					assists: 99,
					visionscore: 23,
					position: Role.BOT,
					spell1: 'Domination',
					spell2: 'Lethal',
					rune1: '',
					rune2: '',
					items: [235, 35, 356]
				}
			]}
		/>
	</div>
</div>

<style>
	.bg-champ-img {
		background: url('/static/img/zeri.jpg');
		background-size: cover;
	}
</style>
