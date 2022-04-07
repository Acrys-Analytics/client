<script lang="ts">
	import { ddragonVersion } from '$lib/stores/ddragonVersion';
	import RoleIcon from '../league/RoleIcon.svelte';
	import type { Role } from '$lib/league/roles.constants';

	export let profileIconId: number = 2076;
	export let level: number = 1;
	export let tier: string = 'Iron';
	export let rank: string = 'IV';
	export let lp: number = 0;
	export let role: Role;
	export let wins: number = 0;
	export let gamesPlayed: number = 0;

	$: tierLower = tier.toLowerCase();
</script>

<div class="w-full relative flex justify-between text-sm">
	<div class="h-[105px] w-[105px] inner-card flex flex-col justify-center items-center text-center">
		<img class="w-12" src="/static/img/master.png" alt={tier} />
		<span>{tier} {rank}</span>
		<span class="text-{tierLower}-primary leading-none">{lp} LP</span>
	</div>
	<img
		class="h-28 w-28 inner-card p-0 border-{tierLower}-primary border-2 position-top"
		src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/profileicon/{profileIconId}.png"
		alt=""
	/>
	<div
		class="position-level badge badge-{tierLower} bg-none bg-challenger-primary bg-opacity-10 text-white"
	>
		Level {level}
	</div>
	<div class="h-[105px] w-[105px] inner-card flex flex-col justify-center items-center text-center">
		<RoleIcon {role} {tier} height="3rem" />
		<span class="mt-2">{role}</span>
		<span class="text-{tierLower}-primary leading-none"
			>{(wins / gamesPlayed) * 100 || 0}% Winrate</span
		>
	</div>
</div>

<style>
	.position-top {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%);
	}

	.position-level {
		position: absolute;
		left: 50%;
		top: 80%;
		transform: translate(-50%, -50%);
	}
</style>
