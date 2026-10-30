import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// Blog posts in src/posts are plain Markdown, compiled to Svelte components by mdsvex.
			extensions: ['.svelte', '.md'],
			preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],

			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),
			appDir: 'app' // Required as the default is _app and GitHub Pages is incompatible with underscores
		}),
		tailwindcss()
	]
});
