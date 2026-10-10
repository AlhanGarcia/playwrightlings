# Lesson 1: Basics & The Modern JavaScript Foundation

Welcome to **Playwrightlings**! If you are new to JavaScript and testing, this is the perfect place to start.

---

## 1. JavaScript Concept: Asynchronous Code (`async` & `await`)

In regular JavaScript:
```javascript
console.log("A");
console.log("B");
```
Lines run immediately one after another.

However, in browsers, actions take time (opening a website, downloading images, rendering buttons). If JavaScript stopped everything while waiting, your program would freeze!

Instead, JavaScript uses **Promises** (a promise that something will finish in the future). To work with them cleanly, we use:

1. `async function`: Marks a function as asynchronous.
2. `await`: Tells JavaScript: *"Pause right here until this browser action finishes before moving to the next line."*

```javascript
test('my first test', async ({ page }) => {
  // `page.goto` takes time, so we must `await` it!
  await page.goto('/01_basics.html');
});
```

---

## 2. Playwright Concept: The `page` Object & Navigation

In Playwright:
- `page` represents an individual browser tab.
- `page.goto(url)` navigates to a URL.
- `expect(page).toHaveTitle(...)` verifies the title in the tab.

---

## 3. Locators & Role-Based Selectors

To interact with buttons, inputs, and links, Playwright uses **Locators**.
The most accessible and resilient locator is `page.getByRole`:

```javascript
// Finds a <button> with text "Click Me"
const myButton = page.getByRole('button', { name: 'Click Me' });

// Clicks it (requires await!)
await myButton.click();
```

---

## Your Mission in this Lesson:

1. Open `01_hello_page.spec.js`.
2. Follow the JavaScript and Playwright comments.
3. Remove the line `// I AM NOT DONE` when you are ready.
4. Save the file and watch the test runner pass!
