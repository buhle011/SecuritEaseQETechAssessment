module.exports = {
  default: {
    require: ['stepdefinitions/*.js','accelarators/hooks.js'],
    format:  ['progress', 'html:reports/cucumber-report.html'],
    parallel: 1,
    timeout: 60000,
    //tags :'@test',
  },
};
