class LogoutPage {
    constructor(page) {
      this.page = page;
      this.menuButton = page.locator("//button[@id='react-burger-menu-btn']")
      this.logoutButton = page.locator("//a[@id='logout_sidebar_link']"); 
      this.loginPageTitle = page.locator('.login_logo'); 
    }
  
    async clickLogout() {
      
      await this.menuButton.waitFor({ state: 'visible', timeout: 5000 });
      await this.menuButton.click(this.menuButton);
      
      await this.logoutButton.waitFor({ state: 'visible', timeout: 5000  });
      await this.logoutButton.click(this.logoutButton);
    }
  
    async isOnLoginPage() {

      await this.page.waitForLoadState('domcontentloaded');
  
      const loginButton = this.page.locator("//input[@type='submit']"); 
  
      await loginButton.waitFor({ state: 'visible', timeout: 5000 });
  
      const isVisible = await loginButton.isVisible();
      
      return isVisible;
    }
  }
  
  module.exports = LogoutPage;
  