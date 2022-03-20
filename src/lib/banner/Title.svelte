<script lang="ts">
	import { onMount } from 'svelte';

	import RoleIcon from './RoleIcon.svelte';
	import type { Role } from './roles.constants';

	let nameElement;

	export let name: string = 'Name';
	export let role: Role;
	export let tier: string = 'iron';

	function getFontSize(text: string): string {
		return `${
			42 -
			(text.length <= 10
				? 0
				: text.length >= 19
				? (text.length - 10) * 1.9
				: (text.length - 10) * 2.1)
		}px`;
	}

	onMount(() => {
		nameElement.style.fontSize = getFontSize(name);
	});
</script>

<div class="flex select-none">
	<RoleIcon {role} {tier} height="4rem" />
	<div class="h-16 flex flex-col items-start justify-between">
		<span class="ml-[1px] badge badge-{tier}">{role}</span>

		<span class="inline-block -mb-1 leading-none text-gradient shadow-lg" bind:this={nameElement}>
			{name}
		</span>
	</div>
</div>

<style>
	.text-gradient {
		background: linear-gradient(100deg, #d8dbe9 30%, rgba(99, 97, 118, 0.57) 120%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
</style>
