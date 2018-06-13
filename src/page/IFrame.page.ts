import { element, by, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
 
  public setHeight(newHeight: number): promise.Promise<void> {
    return browser.executeScript(`document.getElementById("IF1").setAttribute("height", "${newHeight}")`)
  }

  public get frameElement(): ElementFinder {
    return element(by.id('IF1'));
  }

  public async getHeight(): Promise<number> {
    let height = await this.frameElement.getAttribute('height');
    return Number(height);
  }
}
