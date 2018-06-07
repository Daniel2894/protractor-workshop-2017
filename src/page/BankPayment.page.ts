import { element, by, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  private get confirmBankPayment(): ElementFinder {
=======
  private get confirmBankPaymentButton(): ElementFinder {
>>>>>>> fixup
    return element(by.css('#cart_navigation > button > span'));
  }

  public confirmPayment(): promise.Promise<void> {
    return this.confirmBankPaymentButton.click();
  }
}
>>>>>>> eof again
