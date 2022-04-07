import { readable } from 'svelte/store';

export const ddragonVersion = readable('', function start(set) {
	fetch('https://ddragon.leagueoflegends.com/api/versions.json')
		.then((response) => {
			if (response.ok) {
				response
					.json()
					.then((data) => set(data[0]))
					.catch((e) => console.error(e));
			}
		})
		.catch((e) => console.error(e));
});
