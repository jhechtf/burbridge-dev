/**
 *
 * @param size a positive number. Numbers between 0 and 1 are treated as percentages. Any other number is treated as pixels
 * @returns either a % or `px` based string or `undefined` if size is undefined or exactly 0.
 * @example sizeToCss(undefined) // undefined
 * @example sizeToCss(0.35) // '35%'
 * @example sizeToCss(700) // '700px'
 */
export function sizeToCss(size: number | undefined): string | undefined {
	if (size === undefined || size === 0) return undefined;
	if (size > 0 && size <= 1) return `${(size * 100).toFixed(3)}%`;
	return `${size}px`;
}
