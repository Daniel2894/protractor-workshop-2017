import { element, by, ElementFinder } from 'protractor';

export class PersonalInformationPage {

  private get firstNameField(): ElementFinder{
    return element(by.name('firstname'));
  }

  private get lastNameField(): ElementFinder{
    return element(by.name('lastname'));
  }

  private sexRadioButton(sexOption: string): ElementFinder{
    return element(by.css(`[name="sex"][value="${sexOption}"]`));
  }

  private experienceRadioButton(experienceOption: number): ElementFinder{
    return element(by.css(`[name="exp"][value="${experienceOption}"]`));
  }

  private professionRadioButton(profession: string): ElementFinder{
    return element(by.css(`[name="profession"][value="${profession}"]`));
  }

  private toolsRadioButton(tools: string): ElementFinder{
    return element(by.css(`[name="tool"][value="${tools}"]`));
  }

  private continentDrowpdown(continent: string): ElementFinder{
    return element(by.id('continents')).element(by.cssContainingText('option', continent));
  }

  private commandList(command: string): ElementFinder{
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', command));
  }

  private get submitButton(): ElementFinder{
    return element(by.id('submit'));
  }

  private get titleText(): ElementFinder{
    return element(by.css('.wpb_wrapper h1'));
  }

  public async fillForm(formInfo: any): Promise<void> {
    await this.firstNameField.sendKeys(formInfo.firstName);
    await this.lastNameField.sendKeys(formInfo.lastName);
    await this.sexRadioButton(formInfo.sex).click();
    await this.experienceRadioButton(formInfo.experience).click();

    for (let profession of formInfo.profession) {
      await this.professionRadioButton(profession).click();
    }
    
    for (let tool of formInfo.tools) {
      await this.toolsRadioButton(tool).click();
    }

    await this.continentDrowpdown(formInfo.continent).click();

    for (let command of formInfo.commands) {
      await this.commandList(command).click();
    }

    await this.submitButton.click();
  }

  public async formTitle(): Promise<string> {
    return this.titleText.getText();
  }
}
