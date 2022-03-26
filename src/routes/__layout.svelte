<slot />

<style windi:preflights:global windi:safelist:global global>
	html,
	body,
	#app {
		@apply h-full w-full m-0 p-0 font-main bg-base-100 text-content;
	}

	/* Works on Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: #85829d transparent;
	}

	/* Works on Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: thin;
	}

	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: #85829d;
		border-radius: 20px;
		border: 3px solid transparent;
	}
</style>
