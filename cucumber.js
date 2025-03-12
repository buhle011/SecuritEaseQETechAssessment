module.exports = {
  default: {
    require: ['stepdefinitions/*.js','accelarators/hooks.js'],
    format: ['progress', 'json:reports/cucumber-report.json'], 
    parallel: 1,
    timeout: 60000,
  },
};
