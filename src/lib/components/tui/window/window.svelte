<script lang="ts" module>
	import type { Snippet } from 'svelte';
	export type WindowStyle = 'windows' | 'mac';
	export type WindowProps = {
		style?: WindowStyle;
		children: Snippet<[]>;
		size?: { width?: number; height?: number };
	};
</script>

<script lang="ts">
	import { MinusIcon, XIcon, RectangleHorizontalIcon } from 'lucide-svelte';
	import { sizeToCss } from './window-util';
	let { style = 'mac', children, size = { width: 0, height: 0 } }: WindowProps = $props();

	function sizeToWidth(size: number): string {
		console.info(size, size >= 0 && size <= 1, size * 100);
		if (size >= 0 && size <= 1) return `${(size * 100).toFixed(3)}%`;
		return `${size}px`;
	}
</script>

{#snippet header(style: WindowStyle)}
	{#if style === 'mac'}
		<div class="flex gap-2">
			<button class="h-3 w-3 rounded-full bg-red-500" aria-label="Close"></button>
			<button class="h-3 w-3 rounded-full bg-yellow-500" aria-label="Minimize"></button>
			<button class="h-3 w-3 rounded-full bg-green-500" aria-label="Maximize"></button>
		</div>
	{:else}
		<div class="flex gap-2">
			<button class="ml-auto" aria-label="Minimize"><MinusIcon size="1em" /></button>
			<button aria-label="Maximize"><RectangleHorizontalIcon size="1em" /></button>
			<button aria-label="Close"><XIcon size="1em" /></button>
		</div>
	{/if}
{/snippet}

<<<<<<< Updated upstream
<div class="window" style:width={sizeToCss(size.width)} style:height={sizeToCss(size.height)}>
=======
<div
	class="window"
	style:width={size.width !== 0 ? sizeToWidth(size.width) : undefined}
	style:height={size.height !== 0 ? sizeToWidth(size.height) : undefined}
>
>>>>>>> Stashed changes
	<header>
		{@render header(style)}
	</header>
	{@render children()}
</div>

<style>
	@reference '#app.css';

	.window {
		color: var(--color-green-500);
		background-color: var(--color-black);
		border: 1px solid var(--color-green-500);
		padding: --spacing(4);
		border-radius: var(--radius-lg);
	}
</style>
