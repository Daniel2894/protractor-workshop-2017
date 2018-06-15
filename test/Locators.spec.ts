import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page'
import { DownloadService } from '../src/service/Download.service';

describe('In the Tools QA webpage', () => {
  const webpage = 'http://toolsqa.com/automation-practice-form/';
  const formInformation = {
    firstName: 'Alejandro',
    lastName: 'Perdomo',
    sex: 'Male',
    experience: 7,
    profession: ['Automation Tester'],
    tools: ['Selenium Webdriver'],
    continent: 'South America',
    file: './resources/image.jpg',
    filename: 'image.jpg',
    downloadedFile: 'file.xlsx',
    downloadFile: true,
    commands: [
      'Browser Commands',
      'Navigation Commands',
      'Switch Commands',
      'Wait Commands',
      'WebElement Commands']
  };

  beforeAll(async () => {
    await browser.get(webpage);
  });

  describe('I want to fill the form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const downloadService: DownloadService = new DownloadService();

    beforeAll(async () => {
      await personalInformationPage.fillForm(formInformation);
    });

    describe('and get the form title', () => {
      it('Should have the title', async () => {
        expect(await personalInformationPage.formTitle()).toBe('Practice Automation Form');
      });

      describe('Then should upload and download an image', () => {
        it('Should exist image.jpg in the webpage', async () => {
          expect(await personalInformationPage.getUploadedImage()).toBe(formInformation.filename);
        });

        it('And should download file.xlsx into temp folder', async () => {
          await expect(
            downloadService.readFileFromTemp(formInformation.downloadedFile).byteLength
          ).toBeGreaterThan(0);
        });
      });
    });
  });
});
