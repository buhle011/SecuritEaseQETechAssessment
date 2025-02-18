class ProductPage {

  constructor(page) {
    this.page = page;
    this.cartCount = page.locator('.shopping_cart_badge');
    this.addButtons = page.locator("//div[@class='inventory_item_price']/following-sibling::button");
    this.cartIcon = page.locator('.shopping_cart_link');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.zipCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.finishButton = page.locator('#finish');
    this.confirmationText = page.locator('.complete-header');
    this.pagetitle = page.locator('.title');
    this.checkoutHeader = page.locator('.checkout_header');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addRandomProductsToCart() {
   
    const totalButtons = await this.page.locator("//div[@class='inventory_item_price']/following-sibling::button").count();
    
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * totalButtons);
      await this.addButtons.nth(randomIndex).click();
     
    }
  }
  
  async getPageTitle() {
    return (await this.pagetitle.textContent()).trim();
   }
   async proceedToCheckout() {
    
    await this.cartIcon.click();
    await this.checkoutButton.click();  
   
}
  async verifyCartUpdate() {
    await this.cartCount.waitFor({ state: 'visible', timeout: 5000 });
    return await this.cartCount.textContent();
  }

  async enterCheckoutDetails(first, last, zip) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.zipCode.fill(zip);
    await this.continueButton.click();
  }

  async completeOrder() {
    
    await this.finishButton.click();
  }

  async getConfirmationText() {
   
    return await this.confirmationText.textContent();
  }
  async verifyCheckoutPage() {
    expect(page.url()).toContain('checkout-step-one');
  }
  async getCartCount() {
    await this.page.waitForSelector(this.cartBadge, { state: 'visible' });
    const cartText = await this.page.textContent(this.cartBadge);
    return cartText.trim();
  }
  async isCheckoutPageDisplayed() {
    await this.page.waitForURL('**/checkout-step-one.html');  
    const titleText = await this.pagetitle.textContent();
    return titleText.includes("Checkout: Your Information");
 }

}

export default ProductPage;



