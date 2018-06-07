import { element, by, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get selectBankPaymentButton(): ElementFinder {
    return element(by.css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a'));
  }

  public selectPaymenMethod(): promise.Promise<void> {
    return this.selectBankPaymentButton.click();
  }
}
