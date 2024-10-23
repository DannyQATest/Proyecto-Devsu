export class CheckoutCompletePage{

   getCompleteOrderTxt(){
      return cy.get('.complete-header');   //(`xpath=//h2[@class='complete-header']`);
    }
   
   navigate() {
       cy.visit(Cypress.env('baseURL'));
   }
}