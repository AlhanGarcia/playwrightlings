// I AM NOT DONE
// ============================================================================
// 🏆 E2E CHALLENGE 01: LOGIN & AUTHENTICATION FLOW
//
// 🧠 JAVASCRIPT CONCEPTS PRACTICED:
// ----------------------------------------------------------------------------
// - Variable declarations (`const`)
// - Asynchronous execution flow with sequential `await` steps
// - Object properties and method calls
//
// 🎭 PLAYWRIGHT CONCEPTS PRACTICED:
// ----------------------------------------------------------------------------
// - Full realistic multi-step user journey
// - Form error handling and recovery
// - Checking element visibility transitions (`toBeVisible`, `toBeHidden`)
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// Target page: '/challenge_01.html'
// Valid Credentials:
//   Email:    tester@playwrightlings.io
//   Password: Secret123!
//
// 1. Visit '/challenge_01.html'.
// 2. Try logging in with invalid credentials ('wrong@playwrightlings.io', 'badpass').
// 3. Verify that the `#error-msg` locator is visible.
// 4. Fill in the valid email and password.
// 5. Click the 'Sign In' button.
// 6. Verify that `#dashboard` is visible and `#logged-email` displays 'tester@playwrightlings.io'.
// 7. Click the 'Log Out' button and verify `#dashboard` is hidden.
// 8. Remove `// I AM NOT DONE` when complete!
// ============================================================================

const { test, expect } = require('@playwright/test');

test('complete E2E login, error handling, dashboard, and logout journey', async ({ page }) => {
  await page.goto('/challenge_01.html');

  const emailInput = page.locator('#email');
  const passwordInput = page.locator('#password');
  const signInButton = page.getByRole('button', { name: 'Sign In' });
  const errorMsg = page.locator('#error-msg');
  const dashboard = page.locator('#dashboard');
  const logoutButton = page.getByRole('button', { name: 'Log Out' });

  // STEP 1: Attempt login with invalid credentials
  await emailInput.fill('wrong@playwrightlings.io');
  await passwordInput.fill('wrongpass');
  await signInButton.click();

  // TODO 1: Assert that errorMsg is visible
  // Hint: Verify the error message appears after failed login.
  /* WRITE YOUR CODE HERE */

  // STEP 2: Fill in valid credentials
  // Hint: Clear or fill the email and password inputs with valid credentials, then submit.
  /* WRITE YOUR CODE HERE */

  // TODO 2: Assert dashboard is visible
  // Hint: Check that the dashboard container is visible upon successful login.
  /* WRITE YOUR CODE HERE */

  // TODO 3: Verify the logged-in email greeting contains 'tester@playwrightlings.io'
  // Hint: Verify that the text in the logged-email element matches the logged-in user.
  /* WRITE YOUR CODE HERE */

  // TODO 4: Click the logout button
  // Hint: Trigger the logout action.
  /* WRITE YOUR CODE HERE */

  // TODO 5: Verify that the dashboard is now hidden
  // Hint: Assert that the dashboard is no longer visible after logging out.
  /* WRITE YOUR CODE HERE */
});
