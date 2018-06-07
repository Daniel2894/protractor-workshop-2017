import { element, by, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
<<<<<<< HEAD
<<<<<<< HEAD
  private get proceedToCheckoutButton(): ElementFinder {
=======
  
=======
>>>>>>> eof again
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
<<<<<<< HEAD
  }

 
}
>>>>>>> page object model
=======
  } 
}
>>>>>>> eof again
