import { element, by, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get productDetailButton(): ElementFinder {
    return element(by.css('#center_column a.product_img_link[title="Faded Short Sleeve T-shirts"] > img'));
  }

  public goToProductDetail(): promise.Promise<void> {
    return this.productDetailButton.click();
  }
}
