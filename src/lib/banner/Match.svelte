<script lang="ts">
	export let data = {};
</script>

<div class="w-full flex flex-col">
	<div class="w-full flex justify-between items-baseline text-xs">
		{#if false}
			<span class="text-sm text-blue w-[50px]">Victory</span>
		{:else}
			<span class="text-sm text-red w-[50px]">Defeat</span>
		{/if}
		<span>KDA <span class="text-yellow">10.3</span></span>
		<span>LVL <span class="text-white">15</span></span>
		<span>CS <span class="text-white">187</span></span>
		<span>VS <span class="text-white">125</span></span>
		<span>POS <span class="text-white">SUP</span></span>
	</div>
	<div class="mt-1 grid items-grid gap-[12px]">
		<img
			src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png"
			alt="Zeri"
			class="border-2 border-base-400"
		/>
		<span class="grid grid-cols-2 gap-1">
			<img
				src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/SummonerBarrier.png"
				alt="Zeri"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png"
				alt="Zeri"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/SummonerHeal.png"
				alt="Zeri"
			/>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png"
				alt="Zeri"
			/>
		</span>
		<span class="grid grid-cols-4 gap-1">
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png" alt="Zeri" />
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png" alt="Zeri" />
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png" alt="Zeri" />
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/3340.png" alt="Zeri" />
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png" alt="Zeri" />
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png" alt="Zeri" />
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png" alt="Zeri" />
			<img src="https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/Zeri.png" alt="Zeri" />
		</span>
		<span class="flex justify-center items-center text-lg">
			<span>99</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="7" height="20" fill="none" viewBox="0 0 7 20">
				<path stroke="#fff" stroke-opacity=".77" stroke-width="1.989" d="M1.047 19.04l4.175-17.9" />
			</svg>
			<span class="text-red">99</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="7" height="20" fill="none" viewBox="0 0 7 20">
				<path stroke="#fff" stroke-opacity=".77" stroke-width="1.989" d="M1.047 19.04l4.175-17.9" />
			</svg>
			<span>99</span>
		</span>
	</div>
</div>

<style>
	.items-grid {
		grid-template-columns: 50px 50px 104px auto;
	}
</style>
