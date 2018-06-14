import { element, by, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
 
  public setHeight(newHeight: number): promise.Promise<void> {
    return browser.executeScript(`document.getElementById("IF1").setAttribute("height", "${newHeight}")`)
  }

  private get frameElement(): ElementFinder {
    return element(by.id('IF1'));
  }

  private get title(): ElementFinder {
    return element(by.css('#content h1'));
  }

  public async getHeight(): Promise<number> {
    const height = await this.frameElement.getAttribute('height');
    return Number(height);
  }

  public getTitle(): promise.Promise<string> {
    return this.title.getText();
  }

  public switchToFrame(): promise.Promise<void> {
    return browser.switchTo().frame(this.frameElement.getWebElement());
  }

  public switchToMainFrame(): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }
}
