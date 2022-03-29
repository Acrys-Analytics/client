<script lang="ts">
	import Banner from '$lib/banner/Banner.svelte';

	const summoners = ['lol', 'lol', 'lol', 'lol', 'lol'];
</script>

<!--<div class="inline-flex justify-start xl:(justify-center flex) items-start mx-5">-->
<div class="flex flex-col items-center xl:(flex-row justify-center items-start) mb-5">
	{#each summoners as summoner}
		<div class="ml-5 first:ml-0">
			<Banner />
		</div>
	{/each}
</div>
