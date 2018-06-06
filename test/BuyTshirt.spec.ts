import { browser, element, by } from 'protractor';

describe('Buy a t-shirt', () => {
 beforeEach(() => {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async () => {
   await browser.get('http://automationpractice.com/');
   await(browser.sleep(10000));
   await element(by.css('#block_top_menu > ul > li:nth-child(3) > a')).click();
   await(browser.sleep(3000));
   await
   element(by.css('#center_column a.product_img_link[title="Faded Short Sleeve T-shirts"] > img')).click();
   await(browser.sleep(3000));
   await element(by.css('#add_to_cart > button > span')).click();
   await(browser.sleep(3000));
   await element(by.css('[style*="display: block;"] .button-container > a')).click();
   await(browser.sleep(3000));
   await element(by.css('.cart_navigation span')).click();
   await(browser.sleep(3000));
  
   await element(by.id('email')).sendKeys('aperdomobo@gmail.com');
   await element(by.id('passwd')).sendKeys('WorkshopProtractor');
   await element(by.css('#SubmitLogin > span')).click();
   await(browser.sleep(3000));
  
   await element(by.css('[name = "processAddress"] > span')).click();
   await(browser.sleep(3000));

   await element(by.id('cgv')).click();
   await(browser.sleep(3000));

   await element(by.css('[name = "processCarrier"] > span')).click();
   await(browser.sleep(3000));
   await element(by.css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a')).click();
   await(browser.sleep(3000));
   await element(by.css('#cart_navigation > button > span')).click();
   await(browser.sleep(3000));

   await expect(element(by.css('#center_column > div > p > strong')).getText())
     .toBe('Your order on My Store is complete.');
 });
});
