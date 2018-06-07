import { element, by, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  private get proceedToCheckoutButton(): ElementFinder {
=======
  
=======
>>>>>>> eof again
  private get proceedToCheckout(): ElementFinder {
>>>>>>> page object model
=======
  private get proceedToCheckoutButton(): ElementFinder {
>>>>>>> fixup
    return element(by.css('[style*="display: block;"] .button-container > a'));
  }

  public checkoutProduct(): promise.Promise<void> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.proceedToCheckoutButton.click();
  } 
}
=======
    return this.proceedToCheckout.click();
<<<<<<< HEAD
  }

 
}
>>>>>>> page object model
=======
=======
    return this.proceedToCheckoutButton.click();
>>>>>>> fixup
  } 
}
>>>>>>> eof again
