const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	daisyui: {
		styled: true,
		themes: [
			{
				acrys: {
					primary: '#F61067',
					secondary: '#156064',
					accent: '#F3A712',
					neutral: '#FFFFFC',
					'base-100': '#1D1E2C'
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark'
	}
};

module.exports = config;
