const { test, expect } = require('@playwright/test');

test('should open the basics page and verify title and heading', async ({ page }) => {
  // Navigate to the lesson page
  await page.goto('/01_basics.html');

  // Verify the page title
  await expect(page).toHaveTitle('Playwrightlings - Lesson 1: Basics');

  // Verify heading text
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toHaveText('Welcome to Playwright');
});
