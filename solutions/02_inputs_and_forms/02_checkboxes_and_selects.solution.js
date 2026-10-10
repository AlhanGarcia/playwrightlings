const { test, expect } = require('@playwright/test');

test('should select dropdown option and check newsletter box', async ({ page }) => {
  await page.goto('/02_forms.html');

  // Select dropdown option
  await page.getByLabel('Role').selectOption('tester');

  // Check newsletter checkbox
  const newsletterCheckbox = page.getByLabel('Subscribe to newsletter');
  await newsletterCheckbox.check();
  await expect(newsletterCheckbox).toBeChecked();

  // Submit and verify
  await page.getByRole('button', { name: 'Save Profile' }).click();
  const resultDiv = page.locator('#result');
  await expect(resultDiv).toContainText('Role: tester | Newsletter: true');
});
