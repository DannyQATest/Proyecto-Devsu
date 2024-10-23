
import { LoginPage } from "../../page/login-page";
import { HomePage } from "../../page/home-page";
import { CartPage } from "../../page/cart-page";
import { CheckoutPage } from "../../page/checkout-page";
import { CheckoutStepPage } from "../../page/checkoutstep-page";
import { CheckoutCompletePage } from "../../page/checkoutcomplete-page";
import { faker } from '@faker-js/faker';

let loginPage, homePage, cartPage, checkoutPage, checkoutStepPage,checkoutCompletePage;

describe('Test', () => {


   beforeEach(() => {
      loginPage = new LoginPage();
      homePage = new HomePage();
      cartPage = new CartPage();
      checkoutPage = new CheckoutPage();
      checkoutStepPage = new CheckoutStepPage();
      checkoutCompletePage = new CheckoutCompletePage();

      cy.visit('/');
   })

   it('Validation: El usuario puede realizar la compra de 2 productos', () => {
   
   const itemOne = "Sauce Labs Bike Light";
   const itemTwo = "Sauce Labs Fleece Jacket";
   
   const email = "standard_user";
   const password = "secret_sauce";

   // Autenticacion de usuario
   loginPage.fillEmailTxt(email);
   loginPage.fillPasswordTxt(password);
   loginPage.clickLoginBtn();

   // Agregar dos productos al carrito
   homePage.addItemToCartByName(itemOne);
   homePage.addItemToCartByName(itemTwo);
 
   // Visualizar el carrito
   homePage.clickCartBtn();
   
   cartPage.clickCheckoutBtn();
   
   // Completar formulario de compra
   checkoutPage.fillFirstNameTxt(faker.person.firstName());      
   checkoutPage.fillLastNameTxt(faker.person.lastName());              
   checkoutPage.fillZipTxt(faker.location.zipCode());       
   checkoutPage.clickContinueBtn();
   
   // Finalizar la compra
   checkoutStepPage.clickFinishBtn(); 
   checkoutCompletePage.getCompleteOrderTxt().should('have.text', 'Thank you for your order!')
   })
})
