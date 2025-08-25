const { PageElement, By } = require("@serenity-js/web");

module.exports = {
  nombreField: () =>
    PageElement.located(
      By.css(
        'label.mdc-text-field__label--float-above.text:has-text("Nombres")'
      )
    ).describedAs("campo nombre"),

  apellidosField: () =>
    PageElement.located(
      By.css(
        'label.mdc-text-field__label--float-above.text:has-text("Apellidos")'
      )
    ).describedAs("campo apellido"),

  identificacionField: () =>
    PageElement.located(
      By.css("input.input-identification")
    ).describedAs("campo identificacion"),

  ciudadField: () =>
    PageElement.located(
      By.css("input#inputAutocompletecity")
    ).describedAs("campo ciudad"),

  firstCiudadOption: () =>
    PageElement.located(
      By.css("#tableAutocompletecity tbody tr:first-child td:nth-child(2) div")
    ).describedAs("Primera opcion ciudad"),

  guardarButton: () =>
    PageElement.located(By.css("button.button.green.filled")).describedAs(
      "botón Guardar"
    ),

  estadoActivoText: () =>
    PageElement.located(
      By.cssContainingText("span.text.green", "Activo")
    ).describedAs("estado Activo"),

  toastSuccess: () =>
    PageElement.located(
      By.css('[role="alert"], .toast-success, .alert-success')
    ).describedAs("mensaje éxito"),
};
