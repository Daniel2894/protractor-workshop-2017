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

    await productDetailPage.goToProductDetail(); 

    await productListPage.addProductToCart();

    await productAdded.checkoutProduct();

    await summaryStepPage.confirmShoppingCartSummary();

    await signInStepPage.signInToAccount(username, password);

    await addressStepPage.checkoutAddress();

    await shippingStepPage.shippingCheckout();

    await paymentStepPage.selectPaymenMethod();

    await bankPaymentPage.confirmPayment();

    await expect(orderResumePage.confirmOrder())
      .toBe('Your order on My Store is complete.');
  });
});
