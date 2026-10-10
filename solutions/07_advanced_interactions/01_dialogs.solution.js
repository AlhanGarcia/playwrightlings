const { test, expect } = require('@playwright/test');

test('should handle native browser dialogs with event listeners', async ({ page }) => {
  await page.goto('/07_advanced.html');

  const output = page.locator('#output');

  // Handle alert dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Show Alert' }).click();
  await expect(output).toHaveText('Alert acknowledged');

  // Handle prompt dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('prompt');
    await dialog.accept('Playwright Explorer');
  });
  await page.getByRole('button', { name: 'Show Prompt' }).click();
  await expect(output).toHaveText('User entered: Playwright Explorer');
});
