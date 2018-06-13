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

    beforeAll(async () => {
      await iFramePage.setHeight(height);
    })

    it('Should have the new height', async () => {
      await expect(iFramePage.getHeight())
        .toBe(height);
    });    
  });
});
