// I AM NOT DONE
// ============================================================================
// EXERCISE 04: CHECKBOXES AND SELECT DROPDOWNS
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// Booleans:
// Checkboxes have two binary states: true (checked) or false (unchecked).
//
// Function Arguments (Parameters):
// Methods in JavaScript take parameters inside parentheses:
//   selectOption('developer') passes the string 'developer' as an argument.
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - `await locator.check()`: Checks a checkbox or radio button.
// - `await expect(locator).toBeChecked()`: Asserts that a checkbox is checked.
// - `await page.getByLabel('Role').selectOption('tester')`: Selects an option
//   from an HTML `<select>` tag by value or label.
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Navigate to '/02_forms.html'.
// 2. Select the 'QA Tester' option from the 'Role' dropdown (value is 'tester').
// 3. Check the 'Subscribe to newsletter' checkbox.
// 4. Assert that the checkbox is indeed checked (`toBeChecked()`).
// 5. Click the 'Save Profile' button.
// 6. Assert that `#result` contains 'Role: tester' and 'Newsletter: true'.
// 7. Remove `// I AM NOT DONE` when complete.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should select dropdown option and check newsletter box', async ({ page }) => {
  await page.goto('/02_forms.html');

  // TODO 1: Select 'tester' in the 'Role' dropdown
  // Hint: await page.getByLabel('Role').selectOption('tester');
  /* WRITE YOUR CODE HERE */

  // TODO 2: Find the checkbox by role or label and check it
  const newsletterCheckbox = page.getByLabel('Subscribe to newsletter');
  // Hint: await newsletterCheckbox.check();
  /* WRITE YOUR CODE HERE */

  // TODO 3: Verify the checkbox is checked
  // Hint: await expect(newsletterCheckbox).toBeChecked();
  /* WRITE YOUR CODE HERE */

  // TODO 4: Click the 'Save Profile' button
  /* WRITE YOUR CODE HERE */

  // TODO 5: Verify the #result contains 'Role: tester | Newsletter: true'
  const resultDiv = page.locator('#result');
  // Hint: await expect(resultDiv).toContainText('Role: tester | Newsletter: true');
  /* WRITE YOUR CODE HERE */
});
