export class CheckoutPage{

    fillFirstNameTxt(name){
     cy.get('[id=first-name]').type(name);
    }

    fillLastNameTxt(lastn){
      cy.get('[id=last-name]').type(lastn);
    }

    fillZipTxt(postalc){
      cy.get('[id=postal-code]').type(postalc);
    }

    clickContinueBtn(){
      cy.get('[id=continue]').click();
    }
   
   navigate() {
       cy.visit(Cypress.env('baseURL'));
   }
}