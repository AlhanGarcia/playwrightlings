// I AM NOT DONE
// ============================================================================
// EXERCISE 05: WEB-FIRST ASSERTIONS
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// The difference between synchronous and asynchronous assertions:
// Standard test assertions test static variables in memory:
//   expect(2 + 2).toBe(4); // Synchronous, no `await` needed.
//
// Playwright assertions test live browser DOM elements that change over time:
//   await expect(locator).toBeVisible(); // Asynchronous, MUST use `await`!
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// Web-First Assertions:
// - `await expect(locator).toBeVisible()`
// - `await expect(locator).toBeHidden()`
// - `await expect(locator).toHaveCount(expectedNumber)`
// - `await expect(locator).toHaveClass(/pattern/)`
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Navigate to '/03_assertions.html'.
// 2. Verify that `#secret-message` is initially NOT visible (use `toBeHidden()`).
// 3. Click the 'Toggle Secret' button.
// 4. Verify that `#secret-message` is now visible (`toBeVisible()`).
// 5. Verify that the list items (`#items-list li`) have a count of exactly 3.
// 6. Delete `// I AM NOT DONE` when tests pass.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should use web-first assertions for visibility and element count', async ({ page }) => {
  await page.goto('/03_assertions.html');

  const secretMsg = page.locator('#secret-message');
  const toggleBtn = page.getByRole('button', { name: 'Toggle Secret' });
  const listItems = page.locator('#items-list li');

  // TODO 1: Assert that secretMsg is initially hidden
  // Hint: await expect(secretMsg).toBeHidden();
  /* WRITE YOUR CODE HERE */

  // TODO 2: Click the toggle button
  // Hint: await toggleBtn.click();
  /* WRITE YOUR CODE HERE */

  // TODO 3: Assert that secretMsg is now visible
  // Hint: await expect(secretMsg).toBeVisible();
  /* WRITE YOUR CODE HERE */

  // TODO 4: Assert that listItems has a count of 3
  // Hint: await expect(listItems).toHaveCount(3);
  /* WRITE YOUR CODE HERE */
});
