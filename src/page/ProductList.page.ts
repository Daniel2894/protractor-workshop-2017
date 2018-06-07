import { element, by, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get addToCart(): ElementFinder {
    return element(by.css('#add_to_cart > button > span'));
  }

  public addProductToCart(): promise.Promise<void> {
    return this.addToCart.click();
  }
}