const { test, expect } = require('@playwright/test');

test('should add item to list and check all items with loop', async ({ page }) => {
  await page.goto('/06_lists.html');

  const newTodoInput = page.getByPlaceholder('What needs to be done?');
  const addBtn = page.getByRole('button', { name: 'Add' });
  const todoItems = page.locator('.todo-item');

  // Verify starting count
  await expect(todoItems).toHaveCount(3);

  // Add new todo
  await newTodoInput.fill('Write Playwright tests');
  await addBtn.click();

  // Verify updated count
  await expect(todoItems).toHaveCount(4);

  // Check all checkboxes using for...of loop
  const checkboxes = await page.locator('.todo-item input[type="checkbox"]').all();
  for (const box of checkboxes) {
    await box.check();
  }

  // Verify first checkbox is checked
  await expect(checkboxes[0]).toBeChecked();
});
