// I AM NOT DONE
// ============================================================================
// EXERCISE 02: LOCATORS AND CLICKS
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// Objects & Methods:
// In JavaScript, objects are bundles of data and functionality.
// `page` is an object, and `page.getByRole(...)` is a method (a function attached
// to an object).
// Method Chaining:
// You can store a locator in a variable:
//   const myBtn = page.getByRole('button', { name: 'Submit' });
// And then call actions on it:
//   await myBtn.click();
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - `page.getByRole('button', { name: 'Click Me' })` is recommended over CSS selectors.
// - `await locator.click()` scrolls into view, waits for the button to be clickable,
//   and performs the click action (Playwright handles all timing automatically!).
// - `await expect(locator).toHaveText('expected text')` verifies text content.
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Navigate to '/01_basics.html'.
// 2. Check that the paragraph `#status` initially says 'Button not clicked yet'.
// 3. Find the 'Click Me' button and click it.
// 4. Assert that the `#status` paragraph text changes to 'Button was clicked!'.
// 5. Remove `// I AM NOT DONE` when done.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should click button and update status text', async ({ page }) => {
  await page.goto('/01_basics.html');

  // Locator for the status paragraph element
  const statusElement = page.locator('#status');

  // TODO 1: Assert that statusElement initially has text 'Button not clicked yet'
  // Hint: await expect(statusElement).toHaveText('Button not clicked yet');
  /* WRITE YOUR CODE HERE */

  // TODO 2: Locate the button with role 'button' and name 'Click Me'
  // Hint: const clickBtn = page.getByRole('button', { name: 'Click Me' });
  const clickBtn = null; // Replace null with locator

  // TODO 3: Click the button
  // Hint: await clickBtn.click();
  /* WRITE YOUR CODE HERE */

  // TODO 4: Verify the status message updated to 'Button was clicked!'
  // Hint: await expect(statusElement).toHaveText('Button was clicked!');
  /* WRITE YOUR CODE HERE */
});
