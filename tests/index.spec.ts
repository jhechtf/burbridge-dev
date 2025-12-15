import { test, expect } from '@playwright/test';
// We keep the nuxt and server instance
// So we can close them at the end of the test

// Example of testing only generated html
test('Route / exits and render HTML', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	await expect(page).toHaveTitle('Jim Burbridge – Home');
});
