# Lesson 6: Lists, Iteration & JavaScript Arrays

In web applications, you constantly deal with repeated elements: list items (`<li>`), table rows (`<tr>`), product cards, and search results.

---

## 1. JavaScript Concept: Arrays & Loops

An **Array** is an ordered collection of values:
```javascript
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.length); // 3
console.log(fruits[0]);      // 'Apple'
```

### Modern Looping: `for...of` vs `forEach`
When doing asynchronous operations with `await`, you should almost **always use `for...of`**:
```javascript
for (const item of items) {
  // await works predictably here!
  await item.click();
}
```
*(Warning: `items.forEach(async () => ...)` does NOT wait for promises to finish in order!)*

---

## 2. Playwright Locating Multiple Elements

- `page.locator('.todo-item')` matches all matching elements.
- `await expect(page.locator('.todo-item')).toHaveCount(3);`
- `locator.all()`: Returns an array of individual locators for each element:
```javascript
const items = await page.locator('.todo-item').all();
for (const item of items) {
  const text = await item.textContent();
  console.log(text);
}
```
- `locator.first()` / `locator.last()` / `locator.nth(index)`: Accesses specific element.
