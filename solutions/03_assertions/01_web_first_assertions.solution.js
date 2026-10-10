const { test, expect } = require('@playwright/test');

test('should use web-first assertions for visibility and element count', async ({ page }) => {
  await page.goto('/03_assertions.html');

  const secretMsg = page.locator('#secret-message');
  const toggleBtn = page.getByRole('button', { name: 'Toggle Secret' });
  const listItems = page.locator('#items-list li');

  // Verify element is initially hidden
  await expect(secretMsg).toBeHidden();

  // Toggle visibility
  await toggleBtn.click();
  await expect(secretMsg).toBeVisible();

  // Verify element count
  await expect(listItems).toHaveCount(3);
});
