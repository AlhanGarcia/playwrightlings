const { test, expect } = require('@playwright/test');

test('should fill text input and submit form', async ({ page }) => {
  await page.goto('/02_forms.html');

  const username = 'coder_pro';

  // Fill input by associated label
  await page.getByLabel('Username').fill(username);

  // Submit form
  await page.getByRole('button', { name: 'Save Profile' }).click();

  // Verify result message
  await expect(page.locator('#result')).toContainText(`Saved: ${username}`);
});
