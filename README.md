# Playwright Web Automation

## Instructions
repo link : https://github.com/buhle011/WebAutomationTestAssessnment.git
Clone the repository.
Install dependencies:
Install playwright : npm init playwright@latest
choose Javascript
install cucumber   : npm i @cucumber/cucumber
Install the cucumber-html-reporter package : npm install --save-dev cucumber-html-reporter 
Run tests : npx cucumber-js 
To execute all the tests : npx cucumber-js --tags "@test" 
To execute login tests : npx cucumber-js --tags "@login"
To execute logout tests : npx cucumber-js --tags "@logout"
To execute product tests : npx cucumber-js --tags "@product"
After running the tests and generating the generate the HTML report generate-report.js


