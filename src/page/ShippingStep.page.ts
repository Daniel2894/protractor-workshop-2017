import { element, by, ElementFinder } from 'protractor';

export class ShippingStepPage {
<<<<<<< HEAD
  private get agreeTermsOfServiceCheckbox(): ElementFinder {
    return element(by.id('cgv'));
  }

  private get proceedToCheckoutButton(): ElementFinder {
    return element(by.css('[name = "processCarrier"] > span'));
  }

  public async shippingCheckout(): Promise<void> {
    await this.agreeTermsOfServiceCheckbox.click();
    await this.proceedToCheckoutButton.click();
  }
}
=======
 private get agreeTermsOfService(): ElementFinder {
   return element(by.id('cgv'));
 }

 private get proceedToCheckout(): ElementFinder {
  return element(by.css('[name = "processCarrier"] > span'));
}

 public async shippingCheckout(): Promise<void> {
   await this.agreeTermsOfService.click();
   await this.proceedToCheckout.click();
 }
}
>>>>>>> page object model
