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


describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAdded: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const username: string = 'aperdomobo@gmail.com';
  const password: string = 'WorkshopProtractor';

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await productDetailPage.goToProductDetail(); 
    await(browser.sleep(3000));

    await productListPage.addProductToCart();
    await(browser.sleep(3000));

    await productAdded.checkoutProduct();
    await(browser.sleep(3000));

    await summaryStepPage.confirmShoppingCartSummary();
    await(browser.sleep(3000));

    await signInStepPage.signInToAccount(username, password);
    await(browser.sleep(3000));    

    await addressStepPage.checkoutAddress();
    await(browser.sleep(3000));

    await shippingStepPage.shippingCheckout();
    await(browser.sleep(3000));

    await paymentStepPage.selectPaymenMethod();
    await(browser.sleep(3000));

    await bankPaymentPage.confirmPayment();
    await(browser.sleep(3000));

    await expect(orderResumePage.confirmOrder())
      .toBe('Your order on My Store is complete.');
  });
});
