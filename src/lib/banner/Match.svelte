<script lang="ts">
	import KdaIndecator from '$lib/league/KDAIndicator.svelte';
	import { ddragonVersion } from '$lib/stores/ddragonVersion';
	import type { Role } from '$lib/league/roles.constants';
	import ChampionPicture from '$lib/league/ChampionPicture.svelte';

	export let id: string,
		win: boolean,
		kills: number,
		deaths: number,
		assists: number,
		championName: string,
		championLevel: number,
		visionscore: number,
		position: Role,
		spell1: string,
		spell2: string,
		rune1: string,
		rune2: string,
		items: number[];
</script>

<div class="w-full flex flex-col">
	<div class="w-full flex justify-between items-baseline text-xs">
		{#if win}
			<span class="text-sm text-blue w-[50px]">Victory</span>
		{:else}
			<span class="text-sm text-red w-[50px]">Defeat</span>
		{/if}
		<span>KDA <KdaIndecator {kills} {assists} {deaths} /></span>
		<span>LVL <span class="text-white">{championLevel}</span></span>
		<span>VS <span class="text-white">{visionscore}</span></span>
		<span>POS <span class="text-white">{position}</span></span>
	</div>
	<div class="mt-1 grid items-grid gap-[12px] img-center">
		<ChampionPicture name={championName} />
		<span class="grid grid-cols-2 gap-1">
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/spell/{spell1}.png"
				alt="S1"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/{rune1}.png"
				alt="R1"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/spell/{spell2}.png"
				alt="S2"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/{rune2}.png"
				alt="R2"
			/>
		</span>
		<span class="grid grid-cols-4 gap-1">
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/{items[0]}.png"
				alt="I1"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/{items[1]}.png"
				alt="I2"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/{items[2]}.png"
				alt="I3"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/item/3340.png"
				alt="Zeri"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/{items[3]}.png"
				alt="I4"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/{items[4]}.png"
				alt="I5"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/{items[5]}.png"
				alt="I6"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/Zeri.png"
				alt="Zeri"
			/>
		</span>
		<span class="flex justify-center items-center text-lg">
			<span>{kills}</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="7" height="20" fill="none" viewBox="0 0 7 20">
				<path stroke="#fff" stroke-opacity=".77" stroke-width="1.989" d="M1.047 19.04l4.175-17.9" />
			</svg>
			<span class="text-red">{deaths}</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="7" height="20" fill="none" viewBox="0 0 7 20">
				<path stroke="#fff" stroke-opacity=".77" stroke-width="1.989" d="M1.047 19.04l4.175-17.9" />
			</svg>
			<span>{assists}</span>
		</span>
	</div>
</div>

<style>
	.items-grid {
		grid-template-columns: 3.5rem 50px 104px auto;
	}

	.img-center img {
		display: flex;
		justify-items: center;
		align-items: center;
		text-align: center;
	}
</style>
