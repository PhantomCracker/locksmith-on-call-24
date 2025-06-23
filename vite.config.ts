import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { beasties } from 'vite-plugin-beasties'

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		beasties({
			options: {
				preload: 'swap',
			}
		})
	]
});
