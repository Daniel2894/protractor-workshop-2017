import { element, by, ElementFinder, promise } from 'protractor';

export class ProductListPage {
<<<<<<< HEAD
  private get addToCartButton(): ElementFinder {
=======
  private get addToCart(): ElementFinder {
>>>>>>> page object model
    return element(by.css('#add_to_cart > button > span'));
  }

  public addProductToCart(): promise.Promise<void> {
<<<<<<< HEAD
    return this.addToCartButton.click();
  }
}
=======
    return this.addToCart.click();
  }
}
>>>>>>> page object model
