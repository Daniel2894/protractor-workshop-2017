import { element, by, ElementFinder, promise } from 'protractor';

export class ProductListPage {
<<<<<<< HEAD
<<<<<<< HEAD
  private get addToCartButton(): ElementFinder {
=======
  private get addToCart(): ElementFinder {
>>>>>>> page object model
=======
  private get addToCartButton(): ElementFinder {
>>>>>>> fixup
    return element(by.css('#add_to_cart > button > span'));
  }

  public addProductToCart(): promise.Promise<void> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.addToCartButton.click();
  }
}
=======
    return this.addToCart.click();
=======
    return this.addToCartButton.click();
>>>>>>> fixup
  }
}
<<<<<<< HEAD
>>>>>>> page object model
=======
>>>>>>> eof again
