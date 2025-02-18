const reporter = require('cucumber-html-reporter');
const { exec } = require('child_process');

const options = {
  theme: 'bootstrap', 
  jsonFile: 'reports/cucumber-report.json', 
  output: 'reports/cucumber-report.html', 
  reportSuiteAsScenarios: true, 
  launchReport: true, 
};

reporter.generate(options);
