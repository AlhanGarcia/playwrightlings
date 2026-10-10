// I AM NOT DONE
// ============================================================================
// 🏆 FINAL CAPSTONE E2E CHALLENGE: E-COMMERCE CHECKOUT FLOW
//
// 🧠 JAVASCRIPT & PLAYWRIGHT MASTERY:
// ----------------------------------------------------------------------------
// Putting it all together:
// - Navigation
// - Adding multiple products
// - Validating live DOM price calculations
// - Progressing through checkout step transitions
// - Completing full form submission and checking confirmation state
//
// 🎯 YOUR TASK:
// ----------------------------------------------------------------------------
// Target page: '/challenge_02.html'
//
// 1. Visit '/challenge_02.html'.
// 2. Click the 'Add to Cart' button for headphones ('#add-headphones').
// 3. Click the 'Add to Cart' button for laptop stand ('#add-stand').
// 4. Assert cart item count is '2' and total sum is '$200'.
// 5. Click the 'Proceed to Checkout' button ('#goto-checkout-btn').
// 6. Fill in:
//    - Full Name: 'Alex Rivera'
//    - Shipping Address: '123 Automation Way'
//    - Credit Card: '4242 4242 4242 4242'
// 7. Submit by clicking 'Place Order' ('#place-order-btn').
// 8. Assert:
//    - Confirmation screen is visible ('#step-confirmation')
//    - Customer name is 'Alex Rivera' ('#confirm-name')
//    - Final total is '$200' ('#confirm-total')
// 9. When tests pass, remove `// I AM NOT DONE`!
// ============================================================================

const { test, expect } = require('@playwright/test');

test('complete full end-to-end e-commerce store purchase and order confirmation', async ({ page }) => {
  await page.goto('/challenge_02.html');

  // STEP 1: Add products to cart
  const addHeadphonesBtn = page.locator('#add-headphones');
  const addStandBtn = page.locator('#add-stand');
  const cartItemCount = page.locator('#cart-item-count');
  const cartSum = page.locator('#cart-sum');
  const gotoCheckoutBtn = page.locator('#goto-checkout-btn');

  // TODO 1: Click both add-to-cart buttons
  // Hint: Click the headphones and laptop stand add buttons.
  /* WRITE YOUR CODE HERE */

  // TODO 2: Assert cartItemCount is '2' and cartSum is '$200'
  // Hint: Verify the item count and total sum elements reflect the added items.
  /* WRITE YOUR CODE HERE */

  // TODO 3: Click 'Proceed to Checkout'
  // Hint: Click the checkout navigation button to transition to the form.
  /* WRITE YOUR CODE HERE */

  // STEP 2: Fill out checkout form
  const nameInput = page.locator('#fullName');
  const addressInput = page.locator('#address');
  const cardInput = page.locator('#cardNumber');
  const placeOrderBtn = page.locator('#place-order-btn');

  // TODO 4: Fill in customer and payment information, then click Place Order
  // Hint: Fill in name ('Alex Rivera'), address ('123 Automation Way'), and card number ('4242 4242 4242 4242'), then click the submit button.
  /* WRITE YOUR CODE HERE */

  // STEP 3: Validate confirmation
  const confirmationStep = page.locator('#step-confirmation');
  const confirmName = page.locator('#confirm-name');
  const confirmTotal = page.locator('#confirm-total');

  // TODO 5: Verify confirmation screen and final totals
  // Hint: Assert that the confirmation container is visible, the greeting shows the buyer's name, and the total matches $200.
  /* WRITE YOUR CODE HERE */
});
