
describe('API Petstore - Usuario', () => {
   const user = {
     id: 12345,
     username: "storeUser",
     firstName: "storeUser",
     lastName: "petStoreUser",
     email: "storeuser@petstore.com",
     password: "store123456",
     phone: "0995553056",
     userStatus: 0
   };
 
   it('Crear un usuario', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/user', user)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
      });
  });

  it('Buscar el usuario creado', () => {
    cy.request('GET', `https://petstore.swagger.io/v2/user/${user.username}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.username).to.eq(user.username);
        cy.log(response.body);
      });
  });

  it('Actualizar el usuario', () => {
    const updatedUser = {
      ...user,
      username: "storeUserUpdated",
      email: "storeuserupdated@petstore.com"
    };

    cy.request('PUT', `https://petstore.swagger.io/v2/user/${user.username}`, updatedUser)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
      });
  });

  it('Buscar el usuario actualizado', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/user/storeUserUpdated')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.email).to.eq('storeuserupdated@petstore.com');
        cy.log(response.body);
      });
  });

  it('Eliminar el usuario', () => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/user/storeUserUpdated')
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
      });
  });

});