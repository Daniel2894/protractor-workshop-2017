import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page'

describe('In the Tools QA webpage', () => {
  const webpage = 'http://toolsqa.com/automation-practice-form/';

  beforeAll(async () => {
    await browser.get(webpage);
  });

  describe('I want to fill the form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        file: './resources/image.jpg',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    describe('and get the form title', () => {
      it('Should have the title', async () => {
        expect(await personalInformationPage.formTitle()).toBe('Practice Automation Form');
      });

      describe('Then should upload an image', () => {
        it('Should exist image.jpg in the webpage', async () => {
          expect(await personalInformationPage.getUploadedImage()).toBe('image.jpg');
        });
      });
    });
  });
});
