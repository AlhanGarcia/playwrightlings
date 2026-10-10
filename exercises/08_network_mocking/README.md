# Lesson 8: Network Interception & API Mocking

Modern web apps constantly communicate with backend APIs using `fetch()` and JSON data.
In end-to-end testing, backend APIs can sometimes be down, slow, or difficult to put into specific states (like testing error messages or rare edge cases).

---

## 1. JavaScript Concept: JSON (JavaScript Object Notation)

JSON is the language of web APIs:
```javascript
const userData = {
  name: "Sam",
  role: "Lead QA Engineer",
  active: true
};
```
In JavaScript, objects have curly braces `{}` and contain `key: value` pairs.

---

## 2. Playwright Concept: `page.route()`

Playwright can intercept HTTP requests made by the browser and return mock responses without touching the real backend!

```javascript
await page.route('**/api/user', async (route) => {
  // Fulfill the HTTP request with custom mock JSON data:
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    json: {
      name: 'Agent Smith',
      role: 'Test Specialist'
    }
  });
});
```

Whenever the page makes a `fetch('/api/user')`, Playwright intercepts it and instantly serves your mock data.
