import {Config} from 'tailwindcss';

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: '#03A9F4',
				text: '#EEE',
				'text-secondary': '#999',
				background: '#141414',
				'background-variant': '#191919',
				border: 'rgba(241,233,231,0.15)',
				'border-variant': 'rgba(241,233,231,0.05)',
			},
			keyframes: {
				'move-up-down': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(3px)' },
					'100%': { transform: 'translateY(0px)' },
				},
				'rotation': {
					from: {
						transform: 'rotate(0deg)',
					},
					to: {
						transform: 'rotate(359deg)',
					}
				}
			}
		},
	},
} satisfies Config;
