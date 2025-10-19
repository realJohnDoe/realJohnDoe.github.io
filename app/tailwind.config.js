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
					secondary: 'oklch(0.79 0.19 79)', // yellow-vineyards-400
					accent: 'oklch(0.77 0.22 123)',
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
