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
					primary: '#f7de00',
					secondary: '#008208',
					accent: '#f79c00',
					neutral: '#fef3c7',
					'base-100': 'fafafa',
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
