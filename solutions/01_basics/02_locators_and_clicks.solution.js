const { test, expect } = require('@playwright/test');

test('should click button and update status text', async ({ page }) => {
  await page.goto('/01_basics.html');

  const statusElement = page.locator('#status');

  // Verify initial state
  await expect(statusElement).toHaveText('Button not clicked yet');

  // Locate and click button
  const clickBtn = page.getByRole('button', { name: 'Click Me' });
  await clickBtn.click();

  // Verify updated state
  await expect(statusElement).toHaveText('Button was clicked!');
});
