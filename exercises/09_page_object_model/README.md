# Lesson 9: Page Object Model (POM) & JavaScript Classes

As test suites grow to hundreds of tests, writing raw locators directly inside test files causes huge duplication. If a button ID changes, you'd have to edit 50 test files!

The solution is the **Page Object Model (POM)** pattern.

---

## 1. JavaScript Concept: Classes & `this`

A **Class** is a blueprint for creating objects with shared properties and methods:

```javascript
class Calculator {
  // constructor runs when you do `new Calculator()`
  constructor(initialValue) {
    this.value = initialValue; // `this` refers to the specific instance
  }

  add(amount) {
    this.value += amount;
  }
}

const myCalc = new Calculator(10);
myCalc.add(5);
console.log(myCalc.value); // 15
```

---

## 2. Playwright Concept: Page Object Model

A Page Object encapsulates the HTML structure and user actions for a specific page:

```javascript
class ShopPage {
  constructor(page) {
    this.page = page;
    this.keyboardBtn = page.locator('[data-testid="product-keyboard"] button');
    this.cartCount = page.locator('#cart-count');
  }

  async goto() {
    await this.page.goto('/09_shop.html');
  }

  async addKeyboard() {
    await this.keyboardBtn.click();
  }
}
```

In your test:
```javascript
test('user buys keyboard', async ({ page }) => {
  const shop = new ShopPage(page);
  await shop.goto();
  await shop.addKeyboard();
  await expect(shop.cartCount).toHaveText('1');
});
```
Notice how clean and readable your test becomes!
