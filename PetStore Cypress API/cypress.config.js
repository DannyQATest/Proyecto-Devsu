const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     chromeWebSecurity: false,
     video:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});