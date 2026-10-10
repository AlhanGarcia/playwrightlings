// I AM NOT DONE
// ============================================================================
// EXERCISE 09: DIALOGS AND EVENT LISTENERS
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// Event Listeners & Callbacks:
// When an event happens in the browser, Playwright calls your listener function.
// Using `page.once('dialog', async dialog => { ... })` sets up a one-time
// listener for the very next dialog.
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - `dialog.type()`: returns 'alert', 'confirm', or 'prompt'.
// - `dialog.message()`: text inside the popup.
// - `await dialog.accept(promptInput)`: clicks OK (and sends input if prompt).
// - `await dialog.dismiss()`: clicks Cancel.
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Visit '/07_advanced.html'.
// 2. Set up a listener for the alert dialog to accept it, then click 'Show Alert'.
//    Assert that `#output` text is 'Alert acknowledged'.
// 3. Set up a listener for the prompt dialog, enter 'Playwright Explorer', and accept it.
// 4. Click 'Show Prompt'.
// 5. Assert that `#output` contains 'User entered: Playwright Explorer'.
// 6. Delete `// I AM NOT DONE` when passing.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should handle native browser dialogs with event listeners', async ({ page }) => {
  await page.goto('/07_advanced.html');

  const output = page.locator('#output');

  // STEP 1: Handle Alert
  // Register listener before clicking button
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Show Alert' }).click();
  await expect(output).toHaveText('Alert acknowledged');

  // TODO 1: Set up a listener for the prompt dialog
  // Hint:
  // page.once('dialog', async (dialog) => {
  //   expect(dialog.type()).toBe('prompt');
  //   await dialog.accept('Playwright Explorer');
  // });
  /* WRITE YOUR CODE HERE */

  // TODO 2: Click the 'Show Prompt' button
  // Hint: await page.getByRole('button', { name: 'Show Prompt' }).click();
  /* WRITE YOUR CODE HERE */

  // TODO 3: Assert that output contains 'User entered: Playwright Explorer'
  // Hint: await expect(output).toHaveText('User entered: Playwright Explorer');
  /* WRITE YOUR CODE HERE */
});
