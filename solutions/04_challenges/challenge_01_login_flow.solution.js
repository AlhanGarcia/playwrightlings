const { test, expect } = require('@playwright/test');

test('complete E2E login, error handling, dashboard, and logout journey', async ({ page }) => {
  await page.goto('/challenge_01.html');

  const emailInput = page.locator('#email');
  const passwordInput = page.locator('#password');
  const signInButton = page.getByRole('button', { name: 'Sign In' });
  const errorMsg = page.locator('#error-msg');
  const dashboard = page.locator('#dashboard');
  const logoutButton = page.getByRole('button', { name: 'Log Out' });

  // 1. Attempt invalid login
  await emailInput.fill('wrong@playwrightlings.io');
  await passwordInput.fill('wrongpass');
  await signInButton.click();
  await expect(errorMsg).toBeVisible();

  // 2. Log in with valid credentials
  await emailInput.fill('tester@playwrightlings.io');
  await passwordInput.fill('Secret123!');
  await signInButton.click();

  // 3. Verify dashboard and greeting
  await expect(dashboard).toBeVisible();
  await expect(page.locator('#logged-email')).toHaveText('tester@playwrightlings.io');

  // 4. Log out and verify dashboard is hidden
  await logoutButton.click();
  await expect(dashboard).toBeHidden();
});
