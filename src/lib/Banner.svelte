<script lang="ts">
	export let profilePictureId: number;

	export let mastery = [
		{
			name: 'Tristana',
			level: 5,
			points: 34356
		},
		{
			name: 'Zeri',
			level: 2,
			points: 2356
		},
		{
			name: 'Renata',
			level: 5,
			points: 34356
		},
		{
			name: 'Teemo',
			level: 2,
			points: 2356
		},
		{
			name: 'Vi',
			level: 2,
			points: 2356
		},
		{
			name: 'Caitlyn',
			level: 5,
			points: 34356
		},
		{
			name: 'Galio',
			level: 2,
			points: 2356
		},
		{
			name: 'LeeSin',
			level: 5,
			points: 34356
		}
	];

	let masterRanking = 0;

	function getRankIndex(): number {
		masterRanking++;
		return masterRanking;
	}
</script>

<div class="card border-base-300 border-2 shadow-lg flex-1 max-w-xl">
	<div class="p-4 bg-base-200 flex-col justify-center items-center ">
		<div class="flex justify-center items-center mx-4">
			<div class="">
				<h1 class="text-2xl font-bold text-center">LeXonJe</h1>
				<img
					src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/{profilePictureId}.png"
					alt="Profile Logo"
					class="mask mask-circle w-24 mt-4 shadow-lg"
				/>
			</div>
			<div class="divider divider-horizontal" />
			<div class="flex-1 flex-col">
				<h2 class="text-xl font-semibold">Stats</h2>
				<div class="grid gap-2 mt-4">
					<div class="grid grid-cols-2">
						<h3 class="font-semibold">Level</h3>
						<p>202</p>
					</div>
					<div class="grid grid-cols-2">
						<h3 class="font-semibold">Ranked</h3>
						<p>BRONZE II (24LP)</p>
					</div>
					<div class="grid grid-cols-2">
						<h3 class="font-semibold">Ranked Stats</h3>
						<p>6 Wins / 7 Losses</p>
					</div>
				</div>
			</div>
		</div>
		<div class="divider" />
		<div class="flex-col justify-center items-center mx-4">
			<h2 class="text-xl font-semibold text-left">Mastery</h2>
			{#each mastery as master}
				<div class="grid mastery-grid gap-2 place-items-start items-center mt-2">
					<img
						src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/{master.name}.png"
						alt="Icon"
						class="w-10"
					/>
					<span>{getRankIndex()}.</span>
					<span>{master.name}</span>
					<span>Stufe {master.level}</span>
					<span>{master.points} P.</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.mastery-grid {
		grid-template-columns: 2.5rem 1rem 1fr 3.5rem 1fr;
	}
</style>
