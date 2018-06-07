import { element, by, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  private get selectBankPaymentButton(): ElementFinder {
    return element(by.css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a'));
  }

  public selectPaymenMethod(): promise.Promise<void> {
    return this.selectBankPaymentButton.click();
  }
}
=======
 private get selectBankPayment(): ElementFinder {
   return element(by.css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a'));
 }

 public selectPaymenMethod(): promise.Promise<void> {
   return this.selectBankPayment.click();
 }
}
>>>>>>> page object model
=======
  private get selectBankPayment(): ElementFinder {
=======
  private get selectBankPaymentButton(): ElementFinder {
>>>>>>> fixup
    return element(by.css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a'));
  }

  public selectPaymenMethod(): promise.Promise<void> {
    return this.selectBankPaymentButton.click();
  }
}
>>>>>>> eof again
