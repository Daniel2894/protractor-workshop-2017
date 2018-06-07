import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductDetailPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage,
  AddressStepPage,
  ProductListPage
} from '../src/page';


describe('In a shopping webpage', () => {
  const webpage: string = 'http://automationpractice.com/';

  beforeAll(async () => {
    await browser.get(webpage);
  });

  describe('I want to buy a t-shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productDetailPage: ProductDetailPage = new ProductDetailPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAdded: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();

    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      await productDetailPage.goToProductDetail();
      await productListPage.addProductToCart();
      await productAdded.checkoutProduct();
      await summaryStepPage.confirmShoppingCartSummary();
    });

    describe('and login to the webpage', () => {
      const signInStepPage: SignInStepPage = new SignInStepPage();
      const username: string = 'aperdomobo@gmail.com';
      const password: string = 'WorkshopProtractor';  
      beforeAll(async () => {
        await signInStepPage.signInToAccount(username, password);
      });

      describe('select the address', () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        const shippingStepPage: ShippingStepPage = new ShippingStepPage();
        beforeAll(async () => {
          await addressStepPage.checkoutAddress();
          await shippingStepPage.shippingCheckout();
        });

        describe('And make the bank payment', () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const orderResumePage: OrderResumePage = new OrderResumePage();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          beforeAll(async () => {
            await paymentStepPage.selectPaymenMethod();
            await bankPaymentPage.confirmPayment();
          });

          it('then should be bought a t-shirt', async () => {
            await expect(orderResumePage.confirmOrder())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});