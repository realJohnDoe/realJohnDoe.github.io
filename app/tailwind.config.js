/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			// 'light',
			// 'dark',
			// 'cupcake',
			{
				'dark-mod': {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#3b82f6',
					secondary: '#fbbf24',
					accent: '#37cdbe',
					neutral: 'white'
				}
			}
			// 'emerald',
			// 'corporate',
			// 'synthwave',
			// 'retro',
			// 'cyberpunk',
			// 'valentine',
			// 'halloween',
			// 'garden',
			// 'forest',
			// 'aqua',
			// 'lofi',
			// 'pastel',
			// 'fantasy',
			// 'wireframe',
			// 'black',
			// 'luxury',
			// 'dracula',
			// 'cmyk',
			// 'autumn',
			// 'business',
			// 'acid',
			// 'lemonade',
			// 'night',
			// 'coffee',
			// 'winter',
			// 'dim',
			// 'nord',
			// 'sunset'
		]
	},
	plugins: [require('daisyui')]
};
