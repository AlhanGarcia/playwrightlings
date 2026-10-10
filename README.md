# 🎭 Playwrightlings

An interactive, hands-on learning experience for **Playwright** and **Modern JavaScript** from ground zero to end-to-end automation mastery.

Inspired by **Rustlings**, **Cpplings**, and **Exercism**, Playwrightlings guides you through progressive exercises with built-in lessons, detailed code comments explaining JavaScript & Playwright side-by-side, interactive hints, and realistic milestone E2E challenges.

---

## 🌟 Why Playwrightlings?

- 🔰 **Designed for Beginners**: Assumes only very basic knowledge of JavaScript. Concepts like `const`, `arrow functions`, `Promises`, `async/await`, `Objects`, `Arrays`, `for...of`, and `Classes` are explained step-by-step in every exercise.
- ⚡ **Interactive CLI Runner**: An automated file watcher tracks your progress, runs Playwright tests on save, and advances you through the lessons.
- 🌐 **Self-Contained Practice Server**: Includes a local web server with realistic web apps (forms, dynamic async loaders, todo apps, dialogs, and an e-commerce shop)—no external internet connection required for testing.
- 🏆 **Milestone E2E Challenges**: Real-world user flows after every few lessons to put your cumulative skills into practice.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **Git**

### 2. Clone and Install
```bash
git clone https://github.com/AlhanGarcia/playwrightlings.git
cd playwrightlings
npm install
npx playwright install chromium
```

### 3. Start the Interactive Course
```bash
npm start
```
*(or `npm run watch`)*

---

## 🕹 How It Works

1. The runner watches your files and picks the first unsolved exercise.
2. Read the lesson `README.md` and open the `.spec.js` file.
3. Every exercise starts with `// I AM NOT DONE` at the top.
4. Read the JavaScript and Playwright explanations in the comments.
5. Write your solution in the `/* WRITE YOUR CODE HERE */` sections.
6. When tests pass, remove the `// I AM NOT DONE` line and save.
7. The runner automatically awards completion and advances to the next lesson!

---

## 💻 Available Commands

| Command | Description |
|---|---|
| `npm start` / `npm run watch` | Starts the interactive watch mode |
| `npm run list` | Lists all exercises and your completion status |
| `npm run hint` | Prints a contextual hint for your current exercise |
| `npm run hint <id>` | Prints a hint for a specific exercise ID |
| `npm run run <id>` | Runs a single exercise (e.g. `npm run run 01_hello_page`) |
| `npm run verify` | Verifies all completed exercises in sequence |

---

## 📚 Curriculum Overview

```
exercises/
├── 01_basics/
│   ├── README.md                      # Intro to JS Async/Await & Browser Automation
│   ├── 01_hello_page.spec.js          # page.goto(), titles & headings
│   └── 02_locators_and_clicks.spec.js # getByRole, button clicks & text updates
├── 02_inputs_and_forms/
│   ├── README.md                      # Variables, Strings, Booleans & Form Controls
│   ├── 01_text_inputs.spec.js         # fill(), placeholders, labels
│   └── 02_checkboxes_and_selects.spec.js # check(), selectOption(), dropdowns
├── 03_assertions/
│   ├── README.md                      # Web-First Assertions vs Standard JS
│   └── 01_web_first_assertions.spec.js # toBeVisible, toBeHidden, toHaveCount
├── 04_challenges/
│   ├── README_CHALLENGE_01.md         # Milestone 1 Brief
│   └── challenge_01_login_flow.spec.js# 🏆 E2E Challenge 1: Login & Dashboard Flow
├── 05_async_and_waiting/
│   ├── README.md                      # Event Loop, Promises, Auto-waiting
│   └── 01_waiting_for_elements.spec.js# Spinner loaders & async state changes
├── 06_lists_and_loops/
│   ├── README.md                      # Arrays, for...of loops & locator.all()
│   └── 01_todo_list.spec.js           # Multi-element locators & bulk checking
├── 07_advanced_interactions/
│   ├── README.md                      # Event Listeners & Native Browser Modals
│   └── 01_dialogs.spec.js             # Handling alerts, confirms & prompts
├── 08_network_mocking/
│   ├── README.md                      # JSON Data, APIs & Network Interception
│   └── 01_mock_api.spec.js            # page.route() & route.fulfill()
├── 09_page_object_model/
│   ├── README.md                      # JavaScript Classes, constructors & POM
│   └── 01_cart_page.spec.js           # Building reusable Page Objects
└── 10_final_e2e_challenge/
    ├── README.md                      # Capstone Scenario Brief
    └── challenge_02_ecommerce.spec.js # 🏆 E2E Challenge 2: Complete Checkout Flow
```

---

## 👥 Contributing

Contributions, feedback, and additional exercises are welcome!
Feel free to open an issue or submit a pull request.

---

## 📄 License

MIT License. Free for all learners and educators!
