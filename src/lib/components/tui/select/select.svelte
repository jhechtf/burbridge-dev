<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';

	export type SelectOptionRaw = SelectOptionBase & {
		key: string | (() => string);
	};

	export type SelectOptionBase = {
		label: string | Snippet;
		value: string;
	};

	export type SelectOption = SelectOptionBase & {
		key: string;
	};

	export type SelectProps = {
		options: SelectOptionRaw[];
		multi?: boolean;
	};
</script>

<script lang="ts">
	let { options = [], multi = false }: SelectProps = $props();

	const normalizedOptions: SelectOption[] = $derived(
		options.map((opt) => ({ ...opt, key: typeof opt.key === 'string' ? opt.key : opt.key() }))
	);

	const selected: SvelteSet<SelectOption> = new SvelteSet();

	function toggleSelection(option: SelectOption) {
		if (selected.has(option)) {
			selected.delete(option);
		} else {
			selected.add(option);
		}
	}
</script>

{#snippet renderOption(option: SelectOption, allowMultiple: boolean)}
	<div
		class={[
			{
				'option-single': !allowMultiple,
				'option-multi': allowMultiple,
				selected: selected.has(option)
			}
		]}
		aria-selected={selected.has(option)}
		data-value={option.value}
		role="menuitem"
		tabindex="0"
		onkeydown={(e) => {
			e.preventDefault();
			if (e.key === ' ') {
				toggleSelection(option);
			}
		}}
		onclick={(e) => {
			e.preventDefault();
			toggleSelection(option);
		}}
	>
		{#if typeof option.label === 'string'}
			{option.label}
		{:else}
			{@render option.label()}
		{/if}
	</div>
{/snippet}

<div class="select" role="menu">
	{#each normalizedOptions as option (option.key)}
		{@render renderOption(option, multi)}
	{/each}
</div>

<style>
	.select {
		font-family: var(--font-mono);
		[class|='option'] {
			&[aria-selected='true']::before {
				content: '[x]';
			}
			&::before {
				content: '[ ]';
			}
		}
	}
</style>
