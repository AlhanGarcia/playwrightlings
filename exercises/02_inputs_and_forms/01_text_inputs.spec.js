// I AM NOT DONE
// ============================================================================
// EXERCISE 03: TEXT INPUTS AND VARIABLES
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// Variables:
// You can store data in variables so you can reuse them throughout your test:
//   const username = 'learner123';
//
// Template Literals:
// In JavaScript, you can embed variables in strings using backticks:
//   `Hello ${username}!`  becomes "Hello learner123!"
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - `page.getByLabel('Username')` finds the <input> linked to the label "Username".
// - `page.getByPlaceholder('Enter username')` finds inputs by placeholder text.
// - `await locator.fill('text')`: Types text into the input field.
// - `await locator.press('Enter')`: Presses a keyboard key.
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Go to '/02_forms.html'.
// 2. Define a variable `const username = 'coder_pro';`.
// 3. Find the username input using `page.getByLabel('Username')` and fill it.
// 4. Submit the form by clicking the 'Save Profile' button.
// 5. Assert that the `#result` container includes your username.
// 6. Delete `// I AM NOT DONE` when passing.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should fill text input and submit form', async ({ page }) => {
  await page.goto('/02_forms.html');

  // TODO 1: Declare a variable named username with the string 'coder_pro'
  // const username = 'coder_pro';
  /* WRITE YOUR CODE HERE */

  // TODO 2: Locate the input by label 'Username' and fill it with the username variable
  // Hint: await page.getByLabel('Username').fill(username);
  /* WRITE YOUR CODE HERE */

  // TODO 3: Click the 'Save Profile' button
  // Hint: await page.getByRole('button', { name: 'Save Profile' }).click();
  /* WRITE YOUR CODE HERE */

  // TODO 4: Verify that the element with id 'result' contains your username
  // Hint: await expect(page.locator('#result')).toContainText('Saved: coder_pro');
  /* WRITE YOUR CODE HERE */
});
