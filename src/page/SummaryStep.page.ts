import { element, by, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get confirmSummaryButton(): ElementFinder {
    return element(by.css('.cart_navigation span'));
  }

  public confirmShoppingCartSummary(): promise.Promise<void> {
    return this.confirmSummaryButton.click();
  }
}
