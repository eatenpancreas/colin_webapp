import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			// Implement handleHttpError to customize error handling
			handleHttpError: async ({ request, resolve, render }) => {
				const response = await resolve(request);

				if (response.status === 404) {
					return render({
						status: 404,
						error: new Error('Not found'),
					});
				}

				return response;
			},
		},
	}
};

export default config;
