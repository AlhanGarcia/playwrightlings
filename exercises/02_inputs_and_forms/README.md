# Lesson 2: Handling Forms & User Input

Interacting with forms is at the core of web testing. Here you will learn how to fill text, toggle checkboxes, and select dropdown options.

---

## 1. JavaScript Concepts: Strings, Booleans, and Template Literals

- **Strings**: Text surrounded by quotes: `'Alex'` or `"Alex"`.
- **Template Literals**: Strings with backticks (`` `Hello ${name}` ``). They let you insert JavaScript variables directly into text without messy string concatenations (`+`).
- **Booleans**: `true` or `false`. Checkboxes in web forms represent boolean values!

---

## 2. Playwright Form Locators & Actions

Playwright offers specialized helpers tailored to web forms:

1. **Text Inputs**:
   - `await page.getByLabel('Username').fill('myuser');`
   - `fill()` automatically clears existing text and types the new value.
2. **Checkboxes & Radios**:
   - `await page.getByRole('checkbox').check();`
   - `await page.getByRole('checkbox').uncheck();`
   - Assertion: `await expect(page.getByRole('checkbox')).toBeChecked();`
3. **Dropdowns (`<select>`)**:
   - `await page.getByLabel('Role').selectOption('developer');`

---

## Ready?
Open `01_text_inputs.spec.js` and begin!
