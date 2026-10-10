// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: /.*\.(spec|solution)\.js$/,
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    headless: true,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'node runner/server.js',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
