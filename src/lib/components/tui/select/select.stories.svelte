<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Select from './select.svelte';
	const { Story } = defineMeta({
		component: Select,
		args: {
			options: [
				{
					key: 'opt-1',
					label: 'hi',
					value: '1'
				},
				{
					key: () => 'opt-2',
					label: 'hi again',
					value: 'fuck you'
				}
			]
		}
	});
</script>

<Story name="Default" />
