import { element, by, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get usernameElement(): ElementFinder {
    return element(by.id('email'));
  }

  private get passwordElement(): ElementFinder {
    return element(by.id('passwd'));
  }

<<<<<<< HEAD
  private get loginButton(): ElementFinder {
=======
  private get login(): ElementFinder {
>>>>>>> page object model
    return element(by.css('#SubmitLogin > span'));
  }

  public async signInToAccount(username: string, password: string): Promise<void> {
    await this.usernameElement.sendKeys(username);
    await this.passwordElement.sendKeys(password);
<<<<<<< HEAD
    await this.loginButton.click();
=======
    await this.login.click();
>>>>>>> page object model
  }
}
