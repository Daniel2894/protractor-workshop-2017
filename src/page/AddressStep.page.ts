import { element, by, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get checkoutButton(): ElementFinder {
    return element(by.css('[name = "processAddress"] > span'));
  }

  public checkoutAddress(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
