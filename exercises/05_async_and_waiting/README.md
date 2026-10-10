# Lesson 5: Async, Delays & Timing in JavaScript & Playwright

One of the biggest struggles for beginners writing browser tests is **timing**. Websites make network calls that take 500ms or 2 seconds to load.

---

## 1. JavaScript Concepts: Asynchronous Timeouts & Event Loop

In JavaScript, operations like `setTimeout` schedule a task to run after a certain number of milliseconds.

```javascript
setTimeout(() => {
  console.log("2 seconds later!");
}, 2000);
```

Because JavaScript is non-blocking, execution moves right on. If a test tries to click a button that hasn't appeared yet, it will fail unless the test runner knows how to wait.

---

## 2. Playwright Philosophy: Auto-Waiting vs `page.waitForTimeout`

### 🚫 Anti-Pattern: Hardcoded sleeps
```javascript
// AVOID THIS IN PRODUCTION TESTS:
await page.waitForTimeout(5000); // Bad! Wastes time and still flaky on slow networks
```

### ✅ Best Practice: Declarative waiting
Playwright locators automatically wait for actionable states (visible, stable, enabled) before clicking or filling.
Furthermore, web assertions retry automatically up to their configured timeout:

```javascript
// Will wait until #loaded-content appears (or fail after 5s)
await expect(page.locator('#loaded-content')).toBeVisible();
```

If you know a specific action takes longer, you can pass a custom timeout option:
```javascript
await expect(locator).toBeVisible({ timeout: 10000 }); // Waits up to 10 seconds
```
