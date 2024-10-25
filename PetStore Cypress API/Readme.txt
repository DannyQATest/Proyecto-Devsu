Si Cypress no está instalado, puedes agregarlo al proyecto ejecutando el siguiente comando en tu terminal:
npm install cypress --save-dev

Para ejecutar la prueba, sigua los siguientes pasos:

Abre Cypress ejecutando el siguiente comando en la carpeta raíz del proyecto:
npx cypress open

Selecciona el archivo de prueba petStore.cy.js desde la interfaz de Cypress y ejecuta la prueba.

O bien, puedes ejecutar la prueba en modo headless con el siguiente comando:
npx cypress run --spec cypress/e2e/api/petStore.cy.js
