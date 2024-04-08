const common = `
  --require src/common/**/*.js
  --require src/page-objects/**/*.js
  --require src/cucumber-automation/step_definitions/**/*.steps.js
  --config playwright.config.js 
  `;

module.exports = {
    default: `${common} src/cucumber-automation/features/**/*.feature`
};

