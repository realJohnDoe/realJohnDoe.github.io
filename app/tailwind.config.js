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
					primary: '#fde047',
					secondary: '#2563eb',
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
