import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	compilerOptions: {
		experimental: {
			async: true
		}
	},

	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		},
		csp: {
			directives: {
				'worker-src': ['self', 'blob:'],
				'child-src': ['self', 'blob:']
			}
		},
		alias: {
			$components: 'src/lib/components',
			$utils: 'src/lib/util'
		}
	}
};

export default config;
