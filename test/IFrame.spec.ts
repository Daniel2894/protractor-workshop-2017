import { browser } from 'protractor';
import { IFramePage } from '../src/page';


describe('If i want to modify an IFrame', () => {
  const webpage: string = 'http://toolsqa.com/iframe-practice-page/';
  const iFramePage: IFramePage = new IFramePage();  
  
  beforeAll(async () => {
    await browser.get(webpage);
  })

  describe('I want to modify the height of the IFrame', () => {
    const height: number = 400;
    const expectedTitle: string = 'Sample Iframe page';
    const frameSwitchedTitle: string = 'Practice Automation Form';

    beforeAll(async () => {
      await iFramePage.setHeight(height);
    })

    it('Should have the new height', async () => {
      await expect(iFramePage.getHeight())
        .toBe(height);
    });

    it('Should have "Sample IFrame page" for title', async () =>{
      await expect(iFramePage.getTitle())
        .toBe(expectedTitle);
    });

    describe('And should switch to Frame 1', () => {
      beforeAll(async () => {
        await iFramePage.switchToFrame();
      });

      it('Should have the title "Practice Automation Form"', async () => {
        await expect(iFramePage.getTitle()).toBe(frameSwitchedTitle);
      });

      describe('And return to the main frame', () => {
        beforeAll(async () => {
          await iFramePage.switchToMainFrame();
        });

        it('Should have the title of the main frame: "Sample Iframe page"', async () => {
          await expect(iFramePage.getTitle()).toBe(expectedTitle);
        });
      });
    });
  });
});
