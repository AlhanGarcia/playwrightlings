const { test, expect } = require('@playwright/test');

test('complete full end-to-end e-commerce store purchase and order confirmation', async ({ page }) => {
  await page.goto('/challenge_02.html');

  // STEP 1: Add products to cart
  const addHeadphonesBtn = page.locator('#add-headphones');
  const addStandBtn = page.locator('#add-stand');
  const cartItemCount = page.locator('#cart-item-count');
  const cartSum = page.locator('#cart-sum');
  const gotoCheckoutBtn = page.locator('#goto-checkout-btn');

  // Add items
  await addHeadphonesBtn.click();
  await addStandBtn.click();

  // Validate cart calculations
  await expect(cartItemCount).toHaveText('2');
  await expect(cartSum).toHaveText('$200');

  // Transition to checkout
  await gotoCheckoutBtn.click();

  // STEP 2: Fill out checkout form
  const nameInput = page.locator('#fullName');
  const addressInput = page.locator('#address');
  const cardInput = page.locator('#cardNumber');
  const placeOrderBtn = page.locator('#place-order-btn');

  await nameInput.fill('Alex Rivera');
  await addressInput.fill('123 Automation Way');
  await cardInput.fill('4242 4242 4242 4242');
  await placeOrderBtn.click();

  // STEP 3: Validate confirmation
  const confirmationStep = page.locator('#step-confirmation');
  const confirmName = page.locator('#confirm-name');
  const confirmTotal = page.locator('#confirm-total');

  await expect(confirmationStep).toBeVisible();
  await expect(confirmName).toHaveText('Alex Rivera');
  await expect(confirmTotal).toHaveText('$200');
});
