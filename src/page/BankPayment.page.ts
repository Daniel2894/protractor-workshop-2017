import { element, by, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
 private get confirmBankPayment(): ElementFinder {
   return element(by.css('#cart_navigation > button > span'));
 }

 public confirmPayment(): promise.Promise<void> {
   return this.confirmBankPayment.click();
 }
}