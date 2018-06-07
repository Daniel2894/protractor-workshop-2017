import { element, by, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
<<<<<<< HEAD
  private get proceedToCheckoutButton(): ElementFinder {
=======
  
  private get proceedToCheckout(): ElementFinder {
>>>>>>> page object model
    return element(by.css('[style*="display: block;"] .button-container > a'));
  }

  public checkoutProduct(): promise.Promise<void> {
<<<<<<< HEAD
    return this.proceedToCheckoutButton.click();
  } 
}
=======
    return this.proceedToCheckout.click();
  }

 
}
>>>>>>> page object model
