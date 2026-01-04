<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from './input.svelte';

	const { Story } = defineMeta({
		component: Input,
		args: {
			placeholder: 'Placeholder'
		}
	});
</script>

<Story name="Default" />

<Story
	name="With Label"
	args={{
		label: 'Label'
	}}
/>
