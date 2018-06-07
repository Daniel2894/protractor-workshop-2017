import { element, by, ElementFinder, promise } from 'protractor';

export class MenuContentPage {
<<<<<<< HEAD
  private get tShirtMenu(): ElementFinder {
    return element(by.css('#block_top_menu > ul > li:nth-child(3) > a'));
  }

  public goToTShirtMenu(): promise.Promise<void> {
    return this.tShirtMenu.click();
  }
=======
 private get tShirtMenu(): ElementFinder {
   return element(by.css('#block_top_menu > ul > li:nth-child(3) > a'));
 }

 public goToTShirtMenu(): promise.Promise<void> {
   return this.tShirtMenu.click();
 }
>>>>>>> page object model
}
