// Course exercises registry
// Each entry maps an exercise id to its lesson folder, spec file, and hints
module.exports = [
  {
    id: '01_hello_page',
    title: 'Hello Playwright: Opening a Page & Async/Await',
    category: 'basics',
    file: 'exercises/01_basics/01_hello_page.spec.js',
    readme: 'exercises/01_basics/README.md',
    solution: 'solutions/01_basics/01_hello_page.solution.js',
    targetPage: '/01_basics.html',
    hint: 'Actions that communicate with the browser return Promises, requiring `await`. Check page navigation and title assertions in the lesson README.'
  },
  {
    id: '02_locators_and_clicks',
    title: 'Locators and Clicks: Objects, Methods & page.getByRole',
    category: 'basics',
    file: 'exercises/01_basics/02_locators_and_clicks.spec.js',
    readme: 'exercises/01_basics/README.md',
    solution: 'solutions/01_basics/02_locators_and_clicks.solution.js',
    targetPage: '/01_basics.html',
    hint: 'Use role-based locators to target the button by its accessible role and text, then await the click action and verify the text change.'
  },
  {
    id: '03_text_inputs',
    title: 'Text Inputs & Variables: fill(), clear(), press()',
    category: 'inputs',
    file: 'exercises/02_inputs_and_forms/01_text_inputs.spec.js',
    readme: 'exercises/02_inputs_and_forms/README.md',
    solution: 'solutions/02_inputs_and_forms/01_text_inputs.solution.js',
    targetPage: '/02_forms.html',
    hint: 'Store your test input in a variable, target the input field using getByLabel, and submit the form with the button.'
  },
  {
    id: '04_checkboxes_and_selects',
    title: 'Checkboxes, Radios & Dropdowns: Booleans & Arrays',
    category: 'inputs',
    file: 'exercises/02_inputs_and_forms/02_checkboxes_and_selects.spec.js',
    readme: 'exercises/02_inputs_and_forms/README.md',
    solution: 'solutions/02_inputs_and_forms/02_checkboxes_and_selects.solution.js',
    targetPage: '/02_forms.html',
    hint: 'Use the selectOption method for dropdown menus and check() for checkboxes, then use toBeChecked() to assert the state.'
  },
  {
    id: '05_assertions_deep_dive',
    title: 'Web-First Assertions vs Standard JS Comparisons',
    category: 'assertions',
    file: 'exercises/03_assertions/01_web_first_assertions.spec.js',
    readme: 'exercises/03_assertions/README.md',
    solution: 'solutions/03_assertions/01_web_first_assertions.solution.js',
    targetPage: '/03_assertions.html',
    hint: 'Web-first assertions like toBeVisible, toBeHidden, and toHaveCount automatically retry until conditions are satisfied or timeout is reached.'
  },
  {
    id: '06_e2e_challenge_1',
    title: '🏆 E2E Challenge 1: The Login & Dashboard Flow',
    category: 'challenges',
    file: 'exercises/04_challenges/challenge_01_login_flow.spec.js',
    readme: 'exercises/04_challenges/README_CHALLENGE_01.md',
    solution: 'solutions/04_challenges/challenge_01_login_flow.solution.js',
    targetPage: '/challenge_01.html',
    hint: 'Combine what you learned: trigger the error with wrong credentials first, then clear/fill valid credentials and verify the dashboard transitions.'
  },
  {
    id: '07_waiting_and_timing',
    title: 'Auto-waiting, Delays, and Asynchronous JavaScript (Promises)',
    category: 'async',
    file: 'exercises/05_async_and_waiting/01_waiting_for_elements.spec.js',
    readme: 'exercises/05_async_and_waiting/README.md',
    solution: 'solutions/05_async_and_waiting/01_waiting_for_elements.solution.js',
    targetPage: '/05_async.html',
    hint: 'Rely on Playwright web-first assertions rather than fixed timeouts; they wait for async network operations and DOM transitions automatically.'
  },
  {
    id: '08_lists_and_looping',
    title: 'Iterating Elements: Array Methods, for...of, and locator.all()',
    category: 'lists',
    file: 'exercises/06_lists_and_loops/01_todo_list.spec.js',
    readme: 'exercises/06_lists_and_loops/README.md',
    solution: 'solutions/06_lists_and_loops/01_todo_list.solution.js',
    targetPage: '/06_lists.html',
    hint: 'When working with multiple asynchronous items in an array from locator.all(), loop over them using for...of to await each action sequentially.'
  },
  {
    id: '09_dialogs_and_popups',
    title: 'Handling Alerts, Confirms & Prompts: Event Listeners',
    category: 'advanced',
    file: 'exercises/07_advanced_interactions/01_dialogs.spec.js',
    readme: 'exercises/07_advanced_interactions/README.md',
    solution: 'solutions/07_advanced_interactions/01_dialogs.solution.js',
    targetPage: '/07_advanced.html',
    hint: 'Dialog handlers must be registered prior to the user action that triggers the popup. Remember to accept or dismiss the dialog object.'
  },
  {
    id: '10_api_mocking_routing',
    title: 'Network Interception & Mocking: JSON & page.route()',
    category: 'network',
    file: 'exercises/08_network_mocking/01_mock_api.spec.js',
    readme: 'exercises/08_network_mocking/README.md',
    solution: 'solutions/08_network_mocking/01_mock_api.solution.js',
    targetPage: '/08_network.html',
    hint: 'Use page.route with a matching pattern before navigating to intercept and fulfill the network response with custom JSON data.'
  },
  {
    id: '11_pom_pattern',
    title: 'Page Object Model (POM): Classes & Clean Architecture',
    category: 'pom',
    file: 'exercises/09_page_object_model/01_cart_page.spec.js',
    readme: 'exercises/09_page_object_model/README.md',
    solution: 'solutions/09_page_object_model/01_cart_page.solution.js',
    targetPage: '/09_shop.html',
    hint: 'Encapsulate element locators inside class properties in the constructor, and expose clean asynchronous action methods on the class.'
  },
  {
    id: '12_e2e_challenge_2',
    title: '🏆 E2E Challenge 2: Complete E-Commerce Checkout Simulation',
    category: 'challenges',
    file: 'exercises/10_final_e2e_challenge/challenge_02_ecommerce.spec.js',
    readme: 'exercises/10_final_e2e_challenge/README.md',
    solution: 'solutions/10_final_e2e_challenge/challenge_02_ecommerce.solution.js',
    targetPage: '/challenge_02.html',
    hint: 'Follow the full user journey: add items, assert cart calculation, transition steps, submit billing info, and assert final order receipt details.'
  }
];
