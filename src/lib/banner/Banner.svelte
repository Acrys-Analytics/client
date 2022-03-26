<script lang="ts">
	import { Role } from './roles.constants';

	import Title from './Title.svelte';
	import ProfileInfo from './ProfileInfo.svelte';
	import ChampionPool from './ChampionPool.svelte';
	import MatchList from './MatchList.svelte';
</script>

<div class="w-[360px] flex flex-col">
	<div class="relative bg-img h-52">
		<div class="absolute bottom-5">
			<Title name="LeXonJe" role={Role.SUP} tier="challenger" />
		</div>
	</div>
	<ProfileInfo
		stats={[
			{ name: 'KDA', value: '23.45' },
			{ name: 'Ranked', value: 'lol' },
			{ name: 'Ranked', value: 'lol' },
			{ name: 'LEVEL', value: 'lol' }
		]}
	/>
	<span class="mt-5" />
	<ChampionPool />
	<span class="mt-5" />
	<MatchList />
</div>

<style>
	.bg-img {
		background: linear-gradient(275.59deg, #0f0f13 6.4%, rgba(15, 15, 19, 0) 30.22%),
			linear-gradient(83.45deg, #0f0f13 8.39%, rgba(15, 15, 19, 0) 51.34%),
			linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/static/img/zeri.jpg');
		background-size: cover;
	}
</style>
