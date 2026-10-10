const { test, expect } = require('@playwright/test');

test('should mock backend API response with custom user data', async ({ page }) => {
  // Set up network interception route before the fetch request occurs
  await page.route('**/api/user', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      json: { name: 'Super Tester', role: 'Staff QA' },
    });
  });

  await page.goto('/08_network.html');

  // Trigger API fetch
  await page.getByRole('button', { name: 'Load User Profile' }).click();

  // Verify UI updated with mock data
  await expect(page.locator('#user-name')).toHaveText('Super Tester');
  await expect(page.locator('#user-role')).toHaveText('Staff QA');
});
