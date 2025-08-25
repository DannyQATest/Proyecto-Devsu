const { PageElement, By } = require("@serenity-js/web");

module.exports = {
  usernameField: () =>
    PageElement.located(By.id("siigoSignInName")).describedAs("campo usuario"),
  passwordField: () =>
    PageElement.located(By.id("siigoPassword")).describedAs("campo contraseña"),
  loginButton: () =>
    PageElement.located(By.id("siigoNext")).describedAs("botón login"),
};
