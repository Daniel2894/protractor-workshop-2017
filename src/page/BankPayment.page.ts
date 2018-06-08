import { element, by, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get confirmBankPaymentButton(): ElementFinder {
    return element(by.css('#cart_navigation > button > span'));
  }

  public confirmPayment(): promise.Promise<void> {
    return this.confirmBankPaymentButton.click();
  }
}
