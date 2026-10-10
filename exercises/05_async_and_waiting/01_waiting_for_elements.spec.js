// I AM NOT DONE
// ============================================================================
// EXERCISE 07: WAITING AND TIMING
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// Options Objects in JavaScript:
// In JS, functions often accept a configuration object as their last parameter:
//   expect(locator).toBeVisible({ timeout: 7000 });
// Here `{ timeout: 7000 }` is an object with key `timeout` and value `7000` (milliseconds).
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - Playwright automatically waits for elements to appear when using `expect(...).toBeVisible()`.
// - You do NOT need arbitrary `sleep` or `waitForTimeout` calls.
// - You can easily test asynchronous UI changes (like spinners disappearing and
//   data sections appearing).
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Navigate to '/05_async.html'.
// 2. Click the 'Fetch Data' button.
// 3. Notice the loading spinner appears.
// 4. Use `await expect(page.locator('#loaded-content')).toBeVisible()` to wait
//    for the data to finish loading.
// 5. Verify the loading spinner (`#loading`) becomes hidden (`toBeHidden()`).
// 6. Assert that `#data-text` contains 'User records synchronized with cloud.'.
// 7. Remove `// I AM NOT DONE` when complete.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should wait for async remote data to load without manual sleeps', async ({ page }) => {
  await page.goto('/05_async.html');

  const fetchBtn = page.getByRole('button', { name: /Fetch Data/i });
  const loadingSpinner = page.locator('#loading');
  const loadedContent = page.locator('#loaded-content');
  const dataText = page.locator('#data-text');

  // Trigger the async operation
  await fetchBtn.click();

  // TODO 1: Assert that loadedContent becomes visible
  // Hint: Remember that web-first assertions automatically wait for elements to appear.
  /* WRITE YOUR CODE HERE */

  // TODO 2: Assert that loadingSpinner is now hidden
  // Hint: Verify the loading indicator disappears once fetching completes.
  /* WRITE YOUR CODE HERE */

  // TODO 3: Verify dataText content
  // Hint: Assert the exact confirmation message inside the data text element.
  /* WRITE YOUR CODE HERE */
});
