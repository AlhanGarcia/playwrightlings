const { test, expect } = require('@playwright/test');

class ShopPage {
  constructor(page) {
    this.page = page;
    this.cartCount = page.locator('#cart-count');
    this.cartTotal = page.locator('#cart-total');
    this.keyboardBtn = page.locator('[data-testid="product-keyboard"] .add-to-cart-btn');
    this.mouseBtn = page.locator('[data-testid="product-mouse"] .add-to-cart-btn');
  }

  async goto() {
    await this.page.goto('/09_shop.html');
  }

  async addKeyboard() {
    await this.keyboardBtn.click();
  }

  async addMouse() {
    await this.mouseBtn.click();
  }
}

test('should use Page Object Model to add items to cart', async ({ page }) => {
  const shop = new ShopPage(page);
  await shop.goto();

  // Add items via page object methods
  await shop.addKeyboard();
  await shop.addMouse();

  // Assertions
  await expect(shop.cartCount).toHaveText('2');
  await expect(shop.cartTotal).toHaveText('125');
});
