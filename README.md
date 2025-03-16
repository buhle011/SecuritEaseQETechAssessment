# FRONT-END AUTOMATION TASK

## Playwright Web Automation

### Instructions

**Repo Link:** [SecuritEaseQETechAssessment](https://github.com/buhle011/SecuritEaseQETechAssessment.git)

1. Clone the repository:
   
   git clone https://github.com/buhle011/SecuritEaseQETechAssessment.git
  

2. Install dependencies:
   
   npm init playwright@latest
  
   - Choose **JavaScript**

3. Install Cucumber:
  
   npm i @cucumber/cucumber
   

4. Install the cucumber-html-reporter package:
   
   npm install --save-dev cucumber-html-reporter
   

5. Run tests:
   
   npx cucumber-js
   

6. Execute specific test tags:
   - Run **all tests**:
     
     npx cucumber-js --tags "@test"
     
   - Run **results tests**:
     
     npx cucumber-js --tags "@results"
     
   - Run **search tests**:
     
     npx cucumber-js --tags "@search"
     

7. Generate the HTML report:
  
   node generate-report.js
   


