export class CheckoutStepPage{

    async clickFinishBtn(){
      cy.get('[id=finish]').click();
    }
   
   navigate() {
       cy.visit(Cypress.env('baseURL'));
   }
}