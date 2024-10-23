export class BasePage{
  constructor(page){
    cy.page = page;   
  }

  async navigate(){
    await cy.page.goto('/inventory.html');
 }

}