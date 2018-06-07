import { element, by, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
<<<<<<< HEAD
  private get confirmBankPaymentButton(): ElementFinder {
    return element(by.css('#cart_navigation > button > span'));
  }

  public confirmPayment(): promise.Promise<void> {
    return this.confirmBankPaymentButton.click();
  }
}
=======
 private get confirmBankPayment(): ElementFinder {
   return element(by.css('#cart_navigation > button > span'));
 }

 public confirmPayment(): promise.Promise<void> {
   return this.confirmBankPayment.click();
 }
}
>>>>>>> page object model
