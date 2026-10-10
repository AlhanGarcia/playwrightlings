// Course exercises registry
// Each entry maps an exercise id to its lesson folder, spec file, and hints
module.exports = [
  {
    id: '01_hello_page',
    title: 'Hello Playwright: Opening a Page & Async/Await',
    category: 'basics',
    file: 'exercises/01_basics/01_hello_page.spec.js',
    readme: 'exercises/01_basics/README.md',
    targetPage: '/01_basics.html',
    hint: 'Remember: Playwright actions return Promises, so every page interaction needs `await`. Use `await page.goto("/01_basics.html")` and `await expect(page).toHaveTitle(...)`.'
  },
  {
    id: '02_locators_and_clicks',
    title: 'Locators and Clicks: Objects, Methods & page.getByRole',
    category: 'basics',
    file: 'exercises/01_basics/02_locators_and_clicks.spec.js',
    readme: 'exercises/01_basics/README.md',
    targetPage: '/01_basics.html',
    hint: 'Use `page.getByRole("button", { name: "Click Me" })` and call `.click()`. Then assert with `expect(locator).toHaveText(...)`.'
  },
  {
    id: '03_text_inputs',
    title: 'Text Inputs & Variables: fill(), clear(), press()',
    category: 'inputs',
    file: 'exercises/02_inputs_and_forms/01_text_inputs.spec.js',
    readme: 'exercises/02_inputs_and_forms/README.md',
    targetPage: '/02_forms.html',
    hint: 'Declare your username with `const username = "testuser";`. Locate using `page.getByLabel("Username")` or `page.getByPlaceholder(...)`, then call `await locator.fill(...)`.'
  },
  {
    id: '04_checkboxes_and_selects',
    title: 'Checkboxes, Radios & Dropdowns: Booleans & Arrays',
    category: 'inputs',
    file: 'exercises/02_inputs_and_forms/02_checkboxes_and_selects.spec.js',
    readme: 'exercises/02_inputs_and_forms/README.md',
    targetPage: '/02_forms.html',
    hint: 'Use `.check()` for checkboxes, and `.selectOption("pro")` for <select> dropdowns. Assert checkbox status using `await expect(locator).toBeChecked()`.'
  },
  {
    id: '05_assertions_deep_dive',
    title: 'Web-First Assertions vs Standard JS Comparisons',
    category: 'assertions',
    file: 'exercises/03_assertions/01_web_first_assertions.spec.js',
    readme: 'exercises/03_assertions/README.md',
    targetPage: '/03_assertions.html',
    hint: 'Playwright auto-waits with `await expect(locator).toBeVisible()` or `.toHaveCount(3)`. Standard JS `expect(val).toBe(true)` does NOT wait for DOM changes.'
  },
  {
    id: '06_e2e_challenge_1',
    title: '🏆 E2E Challenge 1: The Login & Dashboard Flow',
    category: 'challenges',
    file: 'exercises/04_challenges/challenge_01_login_flow.spec.js',
    readme: 'exercises/04_challenges/README_CHALLENGE_01.md',
    targetPage: '/challenge_01.html',
    hint: 'This integrates what you learned: go to /challenge_01.html, fill in email & password, click Sign In, and verify dashboard welcome text & logout button.'
  },
  {
    id: '07_waiting_and_timing',
    title: 'Auto-waiting, Delays, and Asynchronous JavaScript (Promises)',
    category: 'async',
    file: 'exercises/05_async_and_waiting/01_waiting_for_elements.spec.js',
    readme: 'exercises/05_async_and_waiting/README.md',
    targetPage: '/05_async.html',
    hint: 'Avoid hardcoded sleeps like `page.waitForTimeout` when possible! Use `await expect(locator).toBeVisible({ timeout: 7000 })` or `page.waitForResponse`.'
  },
  {
    id: '08_lists_and_looping',
    title: 'Iterating Elements: Array Methods, for...of, and locator.all()',
    category: 'lists',
    file: 'exercises/06_lists_and_loops/01_todo_list.spec.js',
    readme: 'exercises/06_lists_and_loops/README.md',
    targetPage: '/06_lists.html',
    hint: 'Use `const items = page.locator(".todo-item"); await expect(items).toHaveCount(3);`. To loop with async/await, always prefer `for (const item of await items.all()) { ... }` instead of `.forEach()`.'
  },
  {
    id: '09_dialogs_and_popups',
    title: 'Handling Alerts, Confirms & Prompts: Event Listeners',
    category: 'advanced',
    file: 'exercises/07_advanced_interactions/01_dialogs.spec.js',
    readme: 'exercises/07_advanced_interactions/README.md',
    targetPage: '/07_advanced.html',
    hint: 'Register `page.on("dialog", dialog => dialog.accept("My Input"))` BEFORE triggering the button that opens the dialog!'
  },
  {
    id: '10_api_mocking_routing',
    title: 'Network Interception & Mocking: JSON & page.route()',
    category: 'network',
    file: 'exercises/08_network_mocking/01_mock_api.spec.js',
    readme: 'exercises/08_network_mocking/README.md',
    targetPage: '/08_network.html',
    hint: 'Use `await page.route("**/api/user", async route => { await route.fulfill({ json: { name: "Super Tester", role: "Staff QA" } }); });`.'
  },
  {
    id: '11_pom_pattern',
    title: 'Page Object Model (POM): Classes & Clean Architecture',
    category: 'pom',
    file: 'exercises/09_page_object_model/01_cart_page.spec.js',
    readme: 'exercises/09_page_object_model/README.md',
    targetPage: '/09_shop.html',
    hint: 'In JavaScript classes, define constructor(page) and methods like `async addItem(name)`. Then instantiate: `const shop = new ShopPage(page); await shop.goto();`.'
  },
  {
    id: '12_e2e_challenge_2',
    title: '🏆 E2E Challenge 2: Complete E-Commerce Checkout Simulation',
    category: 'challenges',
    file: 'exercises/10_final_e2e_challenge/challenge_02_ecommerce.spec.js',
    readme: 'exercises/10_final_e2e_challenge/README.md',
    targetPage: '/challenge_02.html',
    hint: 'Put everything together: search product, filter category, add to cart, proceed to checkout, fill credit card details, submit, and verify receipt with order total!'
  }
];
