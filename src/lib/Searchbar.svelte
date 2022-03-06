<script lang="ts">
	let method;
	let search;

	function keypress(event) {
		if (event.key === 'Enter') {
			console.log('ENTER!');
		}
	}
</script>

<div class="form-control w-full">
	<div class="input-group">
		<select class="select select-bordered" bind:value={method}>
			<option selected>Player</option>
			<option>Clash</option>
		</select>
		<input
			type="text"
			placeholder="Search..."
			class="input input-bordered flex-1"
			bind:value={search}
			on:keypress={keypress}
		/>
		<button class="btn btn-square">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
	</div>
</div>
