import { element, by, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return element(by.css('[style*="display: block;"] .button-container > a'));
  }

  public async checkoutProduct(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 5000);
    await this.proceedToCheckoutButton.click();
  } 
}
