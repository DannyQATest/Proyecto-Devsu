const { PageElement, By } = require("@serenity-js/web");

module.exports = {
  createButton: () =>
    PageElement.located(
      By.css('siigo-button-atom[data-id="header-create-button"]')
    ).describedAs("botón Crear"),

  clientesOption: () =>
    PageElement.located(By.css('a[data-value="Clientes"]')).describedAs(
      "opción Clientes"
    ),
};
