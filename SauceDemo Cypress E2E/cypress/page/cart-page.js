export class CartPage{

    async clickCheckoutBtn(){
       cy.get('[id=checkout]').click();
    }

   navigate() {
       cy.visit(Cypress.env('baseURL'));
   }
}