import { element, by, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
 private get confirmTShirtOrder(): ElementFinder {
   return element(by.css('#center_column > div > p > strong'));
 }

 public confirmOrder(): promise.Promise<string> {
   return this.confirmTShirtOrder.getText();
 }
}