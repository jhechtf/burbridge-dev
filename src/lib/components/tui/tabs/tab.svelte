<script lang="ts" module>
	import { onMount, type Snippet } from 'svelte';
	export type TabProps = {
		header: Snippet<[]>;
		children: Snippet<[]>;
	};
</script>

<script lang="ts">
	import { getTabContext } from './tabs.context';
	let { header, children }: TabProps = $props();
	const tabContext = getTabContext();

	tabContext.tabs.push({
		header,
		content: children
	});

	onMount(() => {
		if (tabContext.active === null) {
			tabContext.active = tabContext.tabs[0];
		}
		return () => {
			if (tabContext.active === tabContext.tabs[0]) tabContext.active = null;
		};
	});
</script>
