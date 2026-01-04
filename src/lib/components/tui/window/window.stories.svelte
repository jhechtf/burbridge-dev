<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Window from './window.svelte';

	const { Story } = defineMeta({
		component: Window,
		args: {
			style: 'mac',
			children: defaultChildren,
			size: {
				width: 0.7
			}
		}
	});
</script>

{#snippet defaultChildren()}
	I am the child content
{/snippet}

<Story name="Default" />

<Story
	name="Windows"
	args={{
		style: 'windows'
	}}
/>

<Story
	name="With Size"
	args={{
		size: {
			width: 0.7,
			height: 300
		}
	}}
/>
