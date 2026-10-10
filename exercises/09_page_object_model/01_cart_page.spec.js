// I AM NOT DONE
// ============================================================================
// EXERCISE 11: PAGE OBJECT MODEL (POM) & CLASSES
//
// 🧠 JAVASCRIPT CONCEPT FOR BEGINNERS:
// ----------------------------------------------------------------------------
// Classes & Constructors:
// The `constructor` method runs when a class is instantiated with `new`.
// Methods on the class can be called by instances.
//
// 🎭 PLAYWRIGHT CONCEPT:
// ----------------------------------------------------------------------------
// - Storing locators in class properties: `this.cartCount = page.locator(...)`
// - Wrapping actions in reusable async methods: `async addProduct(...) { ... }`
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// 1. Complete the `ShopPage` class below:
//    - Store `this.keyboardBtn` and `this.mouseBtn` locators in the constructor.
//    - Complete the `addKeyboard()` and `addMouse()` methods.
// 2. In the test, instantiate `new ShopPage(page)`, navigate to the shop,
//    add both the keyboard and mouse to the cart.
// 3. Assert that cart items is '2' and total is '125'.
// 4. Remove `// I AM NOT DONE` when complete.
// ============================================================================

const { test, expect } = require('@playwright/test');

class ShopPage {
  constructor(page) {
    this.page = page;
    this.cartCount = page.locator('#cart-count');
    this.cartTotal = page.locator('#cart-total');

    // TODO 1: Initialize locators for keyboard & mouse "Add to Cart" buttons
    // Hint: Locate each product card using data-testid attributes, then locate the add-to-cart button within each card.
    /* WRITE YOUR CODE HERE */
  }

  async goto() {
    await this.page.goto('/09_shop.html');
  }

  async addKeyboard() {
    // TODO 2: Click the keyboard button
    // Hint: Call the click action on your stored keyboard locator.
    /* WRITE YOUR CODE HERE */
  }

  async addMouse() {
    // TODO 3: Click the mouse button
    // Hint: Call the click action on your stored mouse locator.
    /* WRITE YOUR CODE HERE */
  }
}

test('should use Page Object Model to add items to cart', async ({ page }) => {
  const shop = new ShopPage(page);
  await shop.goto();

  // TODO 4: Call addKeyboard() and addMouse() on the shop instance
  // Hint: Invoke both helper methods on the class instance to add both items to the cart.
  /* WRITE YOUR CODE HERE */

  // Assertions
  await expect(shop.cartCount).toHaveText('2');
  await expect(shop.cartTotal).toHaveText('125');
});
