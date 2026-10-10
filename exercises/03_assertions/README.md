# Lesson 3: Web-First Assertions

In automated testing, **assertions** are the heart of your test. They verify that the application actually behaves as expected.

---

## 1. JavaScript Concept: Equality vs Truthiness

In standard JavaScript:
- `a === b` checks strict equality.
- In Node or Jest: `expect(user.isLoggedIn).toBe(true)`.
- **The Problem:** Standard JavaScript assertions run immediately! If an element is animating, loading, or fetching data over the network, standard equality will fail instantly with a flaky error.

---

## 2. Playwright Concept: Web-First Assertions (Auto-Waiting!)

Playwright introduces **Web-First Assertions**:
```javascript
await expect(locator).toBeVisible();
await expect(locator).toHaveText('Welcome');
```

Why are these special?
- They **automatically retry** and poll the DOM until the condition passes or a timeout expires (default 5 seconds).
- They handle animations, network latency, and rendering seamlessly.
- **Crucial Rule:** Notice the `await` before `expect(...)`! Because web assertions wait over time, they return a Promise and **must** be awaited.

### Common Web Assertions:
- `await expect(locator).toBeVisible()`
- `await expect(locator).toBeHidden()`
- `await expect(locator).toHaveText('exact string')`
- `await expect(locator).toContainText('substring')`
- `await expect(locator).toHaveCount(3)` (checks number of items)
- `await expect(locator).toBeEnabled()` / `toBeDisabled()`
