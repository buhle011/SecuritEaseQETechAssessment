const {  When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LogoutPage = require('../pageObjects/LogoutPage');

When('I click the logout button', async function () {
  this.logoutPage = new LogoutPage(this.page); 
  await this.logoutPage.clickLogout();
});

Then('I should be redirected to the login page', async function () {
  
  const isLoginVisible = await this.logoutPage.isOnLoginPage();
  
  expect(isLoginVisible).toBeTruthy();
});
