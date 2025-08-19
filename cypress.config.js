const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{
        log(message) {
          console.log(message)
          return null
        }
      });
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    viewportHeight: 800,
    viewportWidth: 1280,
    screenshotOnRunFailure: true,
  },
});
