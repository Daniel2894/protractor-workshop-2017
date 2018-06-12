import { element, by, ElementFinder, promise, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return element.all(by.className('product-container'));
  }

  private findByProduct(productName: string): ElementFinder {    
    return this.productContainerList.filter((product: ElementFinder) => 
      product.$('.product-name')
      .getText()
      .then((text: string) => 
        text.includes(productName)
      )).first();
  }

  public selectProduct(productName: string): promise.Promise<void> {
    return this.findByProduct(productName).$('img').click();
  }
}
