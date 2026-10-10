// I AM NOT DONE
// ============================================================================
// EXERCISE 10: API MOCKING AND ROUTING
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// JSON Objects:
// An object literal `{ name: "Neo", role: "Chosen One" }` is directly accepted
// by Playwright's `route.fulfill({ json: ... })`.
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - `await page.route(urlPattern, handler)`: Intercepts network calls matching the pattern.
// - `await route.fulfill({ status, json })`: Provides a synthetic HTTP response.
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Visit '/08_network.html'.
// 2. Intercept requests to '**/api/user'.
// 3. Mock the response to return `{ name: "Super Tester", role: "Staff QA" }`.
// 4. Click the 'Load User Profile' button.
// 5. Assert that `#user-name` has text 'Super Tester' and `#user-role` has text 'Staff QA'.
// 6. Remove `// I AM NOT DONE` when complete.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should mock backend API response with custom user data', async ({ page }) => {
  // TODO 1: Intercept network request to '**/api/user' using page.route
  // Hint: Intercept the route before the page request occurs and fulfill it with status 200, json content type, and an object with name 'Super Tester' and role 'Staff QA'.
  /* WRITE YOUR CODE HERE */

  await page.goto('/08_network.html');

  // Click the load button to initiate the fetch call
  await page.getByRole('button', { name: 'Load User Profile' }).click();

  // TODO 2: Verify that #user-name displays 'Super Tester'
  // Hint: Assert the text inside the user-name span.
  /* WRITE YOUR CODE HERE */

  // TODO 3: Verify that #user-role displays 'Staff QA'
  // Hint: Assert the text inside the user-role span.
  /* WRITE YOUR CODE HERE */
});
