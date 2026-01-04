<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	export type InputProps = {
		label?: string | Snippet;
	} & HTMLAttributes<HTMLInputElement>;
</script>

<script lang="ts">
	let { label, ...rest }: InputProps = $props();
</script>

{#snippet input()}
	<input {...rest} />
{/snippet}

{#if label}
	<label>
		<span>
			{#if typeof label === 'string'}
				{label}
			{:else}
				{@render label()}
			{/if}
		</span>
		{@render input()}
	</label>
{:else}
	{@render input()}
{/if}

<style>
	@reference '#app.css';

	label {
		position: relative;
		color: var(--color-green-400);
		> span {
			position: absolute;
			padding-inline: 0.5rem;
			background-color: var(--bg-color, var(--color-black));
			top: -50%;
			translate: 0 -50%;
			left: 0.5em;
		}
	}

	input {
		padding: --spacing(2) --spacing(4);
		border: 1px solid var(--color-green-500);
		border-radius: var(--radius-sm);
		color: var(--color-green-400);
		background-color: var(--bg-color, var(--color-black));

		&:focus {
			outline: none;
		}
	}
</style>
