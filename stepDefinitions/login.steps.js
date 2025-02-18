const { Given, When, Then } = require('@cucumber/cucumber');
const { expect} = require("@playwright/test");
const LoginPage = require('../pageObjects/LoginPage');
const ProductPage = require('../pageObjects/ProductPage').default;

let  page, loginPage,productPage;

Given('I navigate to the login page', async function () {

  page = this.page;
  loginPage = new LoginPage(page);
  await loginPage.navigateTo();

});

When('I login with {string} and {string}', async (username, password) => {
  await loginPage.login(username, password);
});

Then('I should see the {string} page', async function(expectedTitle) {
  
  productPage = new ProductPage(this.page);
  const actualTitle = await productPage.getPageTitle();
  expect(actualTitle.trim()).toBe(expectedTitle);
  
});

Then('I should see an error message {string}', async (expectedError) => {
  
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBe(expectedError);

});
