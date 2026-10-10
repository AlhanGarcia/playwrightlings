const { test, expect } = require('@playwright/test');

test('should wait for async remote data to load without manual sleeps', async ({ page }) => {
  await page.goto('/05_async.html');

  const fetchBtn = page.getByRole('button', { name: /Fetch Data/i });
  const loadingSpinner = page.locator('#loading');
  const loadedContent = page.locator('#loaded-content');
  const dataText = page.locator('#data-text');

  // Trigger async fetch
  await fetchBtn.click();

  // Playwright automatically waits for loadedContent to become visible
  await expect(loadedContent).toBeVisible();

  // Spinner should disappear
  await expect(loadingSpinner).toBeHidden();

  // Verify loaded data text
  await expect(dataText).toHaveText('User records synchronized with cloud.');
});
