import { element, by, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  private get confirmSummaryButton(): ElementFinder {
    return element(by.css('.cart_navigation span'));
  }

  public confirmShoppingCartSummary(): promise.Promise<void> {
    return this.confirmSummaryButton.click();
  }
}
=======
 private get confirmSummary(): ElementFinder {
   return element(by.css('.cart_navigation span'));
 }

 public confirmShoppingCartSummary(): promise.Promise<void> {
   return this.confirmSummary.click();
 }
}
>>>>>>> page object model
=======
  private get confirmSummary(): ElementFinder {
=======
  private get confirmSummaryButton(): ElementFinder {
>>>>>>> fixup
    return element(by.css('.cart_navigation span'));
  }

  public confirmShoppingCartSummary(): promise.Promise<void> {
    return this.confirmSummaryButton.click();
  }
}
>>>>>>> eof again
