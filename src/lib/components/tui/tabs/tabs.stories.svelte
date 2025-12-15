<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Tabs from './tabs.svelte';
	import Tab from './tab.svelte';

	const { Story } = defineMeta({
		component: Tabs,
		subcomponents: {
			Tab
		},
		tags: ['autodocs']
	});
</script>

{#snippet template()}
	<Tabs>
		<Tab>
			{#snippet header()}
				Hey
			{/snippet}
			Hello
		</Tab>
		<Tab>
			{#snippet header()}
				Hey 2
			{/snippet}
			Hello 2
		</Tab>
	</Tabs>
{/snippet}

<Story name="Default" {template} />

<Story name="Tab in Tab">
	{#snippet template()}
		<Tabs>
			<Tab>
				{#snippet header()}
					Tab 1
				{/snippet}
				Check Tab 2
			</Tab>
			<Tab>
				{#snippet header()}
					Tab 2
				{/snippet}

				<Tabs>
					<Tab>
						{#snippet header()}
							Tab 2-1
						{/snippet}

						Tab 2-1 content
					</Tab>
					<Tab>
						{#snippet header()}
							Tab 2-2
						{/snippet}
						Tab 2-2 content
					</Tab>
				</Tabs>
			</Tab>
		</Tabs>
	{/snippet}
</Story>
