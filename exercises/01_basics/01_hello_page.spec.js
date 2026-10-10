// I AM NOT DONE
// ============================================================================
// EXERCISE 01: HELLO PAGE
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// 1. `const` declares a variable whose reference cannot be reassigned.
//    Example: const name = "Alice";
// 2. `require(...)` imports code from other libraries or files.
// 3. Arrow Functions: `async ({ page }) => { ... }` is a concise way to write
//    a function in modern JavaScript. The `async` keyword allows us to use `await`.
// 4. `await`: Browser automation is asynchronous (takes time). Whenever you ask
//    Playwright to do something in the browser, you MUST write `await`.
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - `test('name', async ({ page }) => { ... })` defines a test case.
// - `page` is a browser tab provided automatically by Playwright's test runner.
// - `await page.goto(url)` navigates to an address.
// - `await expect(page).toHaveTitle(expectedTitle)` checks the page's <title>.
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Navigate to '/01_basics.html' using `page.goto()`.
// 2. Assert that the page title is 'Playwrightlings - Lesson 1: Basics'.
// 3. Assert that the <h1> heading has the text 'Welcome to Playwright'.
// 4. When all tests pass, delete `// I AM NOT DONE` at the very top of this file!
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should open the basics page and verify title and heading', async ({ page }) => {
  // TODO 1: Navigate to the lesson page
  // Hint: Provide the relative path '/01_basics.html' as an argument to page.goto()
  await page.goto('');

  // TODO 2: Verify the title of the browser tab
  // Target title: 'Playwrightlings - Lesson 1: Basics'
  // Hint: Look up how Playwright tests the page title against an expected string.
  /* WRITE YOUR CODE HERE */

  // TODO 3: Verify the main heading text
  // In Playwright, page.getByRole('heading', { level: 1 }) finds the <h1> tag.
  const heading = page.getByRole('heading', { level: 1 });
  
  // Hint: Check the text content of the heading locator for 'Welcome to Playwright'.
  /* WRITE YOUR CODE HERE */
});
