// I AM NOT DONE
// ============================================================================
// EXERCISE 08: LISTS AND LOOPING
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// Arrays and the `for...of` loop:
// When iterating over an array of asynchronous items, use `for...of`:
//   for (const checkbox of checkboxes) {
//     await checkbox.check();
//   }
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - `page.locator('.todo-item')` creates a multi-element locator.
// - `await locator.all()` resolves into an array of locators you can loop through.
// - `locator.nth(i)` retrieves the i-th item (0-indexed).
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Visit '/06_lists.html'.
// 2. Add a new todo item: 'Write Playwright tests'.
// 3. Verify that the total count of `.todo-item` elements is now 4.
// 4. Use `page.locator('.todo-item input[type="checkbox"]').all()` and a `for...of`
//    loop to check EVERY checkbox in the list.
// 5. Verify that the first checkbox is checked.
// 6. Delete `// I AM NOT DONE` when done.
// ============================================================================

const { test, expect } = require('@playwright/test');

test('should add item to list and check all items with loop', async ({ page }) => {
  await page.goto('/06_lists.html');

  const newTodoInput = page.getByPlaceholder('What needs to be done?');
  const addBtn = page.getByRole('button', { name: 'Add' });
  const todoItems = page.locator('.todo-item');

  // Initial count is 3
  await expect(todoItems).toHaveCount(3);

  // TODO 1: Fill the input with 'Write Playwright tests' and click Add
  // Hint: Type the new todo title into the input, then click the Add button.
  /* WRITE YOUR CODE HERE */

  // TODO 2: Assert that todoItems now has a count of 4
  // Hint: Check the updated number of elements in the todo list.
  /* WRITE YOUR CODE HERE */

  // TODO 3: Get all checkboxes and check each one using for...of
  const checkboxes = await page.locator('.todo-item input[type="checkbox"]').all();
  
  // Hint: Iterate over the array of checkbox locators using a for...of loop and check each one.
  /* WRITE YOUR CODE HERE */

  // TODO 4: Verify the first checkbox is checked
  // Hint: Check the state of the first item in the checkboxes array.
  /* WRITE YOUR CODE HERE */
});
