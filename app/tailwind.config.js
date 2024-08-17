/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#fbbf24',
					secondary: '#3b82f6',
					accent: '#ea580c',
					neutral: '#fef3c7',
					'base-100': 'fcfaf2',
					info: '#0000ff',
					success: '#84cc16',
					warning: '#ea580c',
					error: '#b91c1c'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
