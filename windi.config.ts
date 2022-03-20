import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		colors: {
			blue: '#28C8FB',
			green: '#49F350',
			yellow: '#F8C74A',
			red: '#FB2841',
			white: '#FFFFFF',
			content: '#85829D',
			transparent: 'transparent',
			base: {
				100: '#0F0F13',
				200: '#232333',
				300: '#1C1B2E',
				400: '#2C2C3B'
			},
			unranked: {
				primary: '#A6A6A6',
				secondary: '#414141'
			},
			iron: {
				primary: '#615958',
				secondary: '#433431'
			},
			bronze: {
				primary: '#965A4E',
				secondary: '#594945'
			},
			silver: {
				primary: '#BECEFF',
				secondary: '#62666A'
			},
			gold: {
				primary: '#C28F40',
				secondary: '#7A5A29'
			},
			platin: {
				primary: '#19C0AB',
				secondary: '#2C6B67'
			},
			diamond: {
				primary: '#2090F8',
				secondary: '#394375'
			},
			master: {
				primary: '#CB49E7',
				secondary: '#533F62'
			},
			grandmaster: {
				primary: '#F3472F',
				secondary: '#564543'
			},
			challenger: {
				primary: '#CEB172',
				secondary: '#4ED8EC'
			}
		},
		extend: {
			screens: {
				xl: '1920px'
			},
			fontFamily: {
				main: ['Airborne', 'ui-sans-serif', 'system-ui']
			},
			borderWidth: {
				1: '1px'
			},
			rounded: {
				5: '5px'
			}
		}
	},
	safelist: [
		'fill-unranked-primary',
		'fill-unranked-secondary',
		'fill-iron-primary',
		'fill-iron-secondary',
		'fill-bronze-primary',
		'fill-bronze-secondary',
		'fill-silver-primary',
		'fill-silver-secondary',
		'fill-gold-primary',
		'fill-gold-secondary',
		'fill-platin-primary',
		'fill-platin-secondary',
		'fill-diamond-primary',
		'fill-diamond-secondary',
		'fill-master-primary',
		'fill-master-secondary',
		'fill-grandmaster-primary',
		'fill-grandmaster-secondary',
		'fill-challenger-primary',
		'fill-challenger-secondary',
		'badge-blue',
		'badge-unranked',
		'badge-iron',
		'badge-bronze',
		'badge-silver',
		'badge-gold',
		'badge-platin',
		'badge-diamond',
		'badge-master',
		'badge-grandmaster',
		'badge-challenger'
	],
	shortcuts: {
		badge: 'border-2 px-1 text-sm select-none',
		'badge-blue': 'border-blue bg-blue bg-opacity-10 text-blue',
		'badge-unranked':
			'border-unranked-primary bg-unranked-primary bg-opacity-10 text-unranked-primary',
		'badge-iron': 'border-iron-primary bg-iron-primary bg-opacity-10 text-iron-primary',
		'badge-bronze': 'border-bronze-primary bg-bronze-primary bg-opacity-10 text-bronze-primary',
		'badge-silver': 'border-silver-primary bg-silver-primary bg-opacity-10 text-silver-primary',
		'badge-gold': 'border-gold-primary bg-gold-primary bg-opacity-10 text-gold-primary',
		'badge-platin': 'border-platin-primary bg-platin-primary bg-opacity-10 text-platin-primary',
		'badge-diamond': 'border-diamond-primary bg-diamond-primary bg-opacity-10 text-diamond-primary',
		'badge-master': 'border-master-primary bg-master-primary bg-opacity-10 text-master-primary',
		'badge-grandmaster':
			'border-grandmaster-primary bg-grandmaster-primary bg-opacity-10 text-grandmaster-primary',
		'badge-challenger':
			'border-challenger-primary bg-challenger-primary bg-opacity-10 text-challenger-primary',
		card: 'bg-gradient-to-r from-[#1A1B25] to-[#101016] border-2 border-[#18171E] p-4 text-sm rounded-[5px]',
		select:
			'py-[2px] badge cursor-pointer border-blue bg-blue bg-opacity-5 text-blue hover:bg-opacity-25 flex'
	},
	variants: {},
	plugins: []
});
