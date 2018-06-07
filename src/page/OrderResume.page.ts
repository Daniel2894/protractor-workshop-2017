import { element, by, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
<<<<<<< HEAD
<<<<<<< HEAD
  private get confirmationText(): ElementFinder {
    return element(by.css('#center_column > div > p > strong'));
  }

  public confirmOrder(): promise.Promise<string> {
    return this.confirmationText.getText();
  }
}
=======
 private get confirmTShirtOrder(): ElementFinder {
   return element(by.css('#center_column > div > p > strong'));
 }

 public confirmOrder(): promise.Promise<string> {
   return this.confirmTShirtOrder.getText();
 }
}
>>>>>>> page object model
=======
  private get confirmTShirtOrder(): ElementFinder {
    return element(by.css('#center_column > div > p > strong'));
  }

  public confirmOrder(): promise.Promise<string> {
    return this.confirmTShirtOrder.getText();
  }
}
>>>>>>> eof again
