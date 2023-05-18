import { ResolvedOptions } from './utils/options.d';

interface PluginAPI {
	/**
	 * must not be modified, should not be used outside of vite-plugin-svelte repo
	 * @internal
	 * @experimental
	 */
	options?: ResolvedOptions;
	// TODO expose compile cache here so other utility plugins can use it
}