import { element, by, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get addToCartButton(): ElementFinder {
    return element(by.css('#add_to_cart > button > span'));
  }

  public addProductToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
