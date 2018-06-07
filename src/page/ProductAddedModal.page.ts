import { element, by, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private get proceedToCheckout(): ElementFinder {
    return element(by.css('[style*="display: block;"] .button-container > a'));
  }

  public checkoutProduct(): promise.Promise<void> {
    return this.proceedToCheckout.click();
  } 
}
