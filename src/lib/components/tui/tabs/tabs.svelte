<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type TabsProps = {
		children?: Snippet<[]>;
	};
</script>

<script lang="ts">
	import { getTabContext, setTabContext, type TabContext } from './tabs.context';

	let { children }: TabsProps = $props();

	let tabContext: TabContext = $state({
		active: null,
		tabs: []
	});

	setTabContext(tabContext);

	const tabs = getTabContext();
</script>

<div class="tabs">
	<header class="flex gap-3 border-b border-green-400 pb-3" role="tablist">
		<!-- eslint-disable-next-line svelte/require-each-key -->
		{#each tabs.tabs as tab}
			{@const isActive = tabs.active === tab}
			<button
				class={[
					'btn-outline-primary',
					{
						active: isActive
					}
				]}
				role="tab"
				onclick={() => (tabs.active = tab)}
				aria-selected={tabs.active === tab}
			>
				{@render tab.header({ active: isActive })}
			</button>
		{/each}
	</header>

	<div class="content pt-4">
		<!-- eslint-disable-next-line svelte/require-each-key -->
		{#each tabs.tabs as tab}
			<div
				class={[
					{
						hidden: tab !== tabs.active
					}
				]}
				role="tabpanel"
			>
				{@render tab.content()}
			</div>
		{/each}
		{@render children?.()}
	</div>
</div>
