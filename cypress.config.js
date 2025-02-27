const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gyduja',
  e2e: {
    supportFile: "cypress/support/e2e.js",
    baseUrl:"http://www.automationpractice.pl/index.php?",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
