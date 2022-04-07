<script lang="ts">
	export let kills: number, deaths: number, assists: number;

	$: kda = Number(((kills + assists) / deaths).toFixed(2));
</script>

<span
	class="text-content-100"
	class:text-blue={kda >= 1}
	class:text-yellow={kda >= 5}
	class:text-red={kda >= 10}>{kda}</span
>

<style>
</style>
