import { has } from "lodash";

export class HomePage{

    addItemToCartByName(name){
      return cy
      .get('.inventory_item_name').contains(name)
      .parents('.inventory_item')
      .find('[id^=add-to-cart-]').click();
    }

    async clickCartBtn(){
      cy.get('[id=shopping_cart_container]').click();
    }

   navigate() {
       cy.visit(Cypress.env('baseURL'));
   }
}