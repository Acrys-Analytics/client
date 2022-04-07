<script lang="ts">
	import { ddragonVersion } from '$lib/stores/ddragonVersion';

	export let name: string;
</script>

<img
	src="https://ddragon.leagueoflegends.com/cdn/{$ddragonVersion}/img/champion/{name}.png"
	alt={name}
	class="h-14 w-14 flex justify-center items-center border-base-200 border-2"
/>

<style>
</style>
