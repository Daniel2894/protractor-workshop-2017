import { element, by, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  private get productDetailButton(): ElementFinder {
    return element(by.css('#center_column a.product_img_link[title="Faded Short Sleeve T-shirts"] > img'));
  }

  public goToProductDetail(): promise.Promise<void> {
    return this.productDetailButton.click();
  }
}
=======
 private get productDetail(): ElementFinder {
   return element(by.css('#center_column a.product_img_link[title="Faded Short Sleeve T-shirts"] > img'));
 }

 public goToProductDetail(): promise.Promise<void> {
   return this.productDetail.click();
 }
}
>>>>>>> page object model
=======
  private get productDetail(): ElementFinder {
=======
  private get productDetailButton(): ElementFinder {
>>>>>>> fixup
    return element(by.css('#center_column a.product_img_link[title="Faded Short Sleeve T-shirts"] > img'));
  }

  public goToProductDetail(): promise.Promise<void> {
    return this.productDetailButton.click();
  }
}
>>>>>>> eof again
