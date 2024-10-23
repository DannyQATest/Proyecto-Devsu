export class LoginPage{
 
   fillEmailTxt(email){
      cy.get('[id=user-name]').type(email);
   }
   
   fillPasswordTxt(password){
      cy.get('[id=password]').type(password);
   }

   async clickLoginBtn(){
      cy.get('[id=login-button]').click();
   }

   getLoginBtn(){
      return cy.get('[id=login-button]');
   }

   getMsgTxt(){
      return cy.get('[data-test=error]');
   }

   navigate() {
       cy.visit(Cypress.config.env(baseURL));
   }
}