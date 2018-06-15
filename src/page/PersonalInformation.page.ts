import { element, by, ElementFinder } from 'protractor';
import { resolve } from 'path';
import { DownloadService } from '../service/Download.service'

export class PersonalInformationPage {

  private get firstNameField(): ElementFinder{
    return element(by.name('firstname'));
  }

  private get lastNameField(): ElementFinder{
    return element(by.name('lastname'));
  }

  private sexRadioButton(sexOption: string): ElementFinder{
    return element(by.css(`[value="${sexOption}"]`));
  }

  private experienceRadioButton(experienceOption: number): ElementFinder{
    return element(by.css(`[value="${experienceOption}"]`));
  }

  private professionRadioButton(profession: string): ElementFinder{
    return element(by.css(`[value="${profession}"]`));
  }

  private toolsRadioButton(tools: string): ElementFinder{
    return element(by.css(`[value="${tools}"]`));
  }

  private continentDrowpdown(continent: string): ElementFinder{
    return element(by.cssContainingText('option', continent));
  }

  private commandList(command: string): ElementFinder{
    return element(by.cssContainingText('option', command));
  }

  private get submitButton(): ElementFinder{
    return element(by.id('submit'));
  }

  private get titleText(): ElementFinder{
    return element(by.css('.wpb_wrapper h1'));
  }

  private get uploadButton(): ElementFinder{
    return element(by.id('photo'));
  }

  private get getDownloadLink(): ElementFinder{
    return element(by.linkText('Test File to Download'));
  }

  private async download(): Promise<void> {
    const downloadLink = await this.getDownloadLink.getAttribute('href');

    const downloadService: DownloadService = new DownloadService();
    
    await downloadService.downloadFile(downloadLink, 'file.xlsx');
  }

  public async uploadFile(relativeRoute: string): Promise<void> {
    const absoluteRoute = resolve(process.cwd(), relativeRoute);

    await this.uploadButton.sendKeys(absoluteRoute);
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

    if (formInfo.file) {
      await this.uploadFile(formInfo.file);
    }

    if (formInfo.downloadFile) {
      await this.download();
    }
  }

  public async formTitle(): Promise<string> {
    return this.titleText.getText();
  }

  public async submit(formInfo: any): Promise<void> {
    await this.fillForm(formInfo);
    await this.submitButton.click();
  }

  public async getUploadedImage(): Promise<string> {
    const uploadedRoute: string = await this.uploadButton.getAttribute('value');
    return uploadedRoute.split('C:\\fakepath\\').pop();
  }
}
