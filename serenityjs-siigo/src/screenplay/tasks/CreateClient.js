const { Task } = require("@serenity-js/core");
const { Enter, Click } = require("@serenity-js/web");
const ClientFormPage = require("../ui/ClientFormPage");
const { timeouts } = require("../../config/env");

module.exports = {
  CreateClient: ({ nombre, apellido, identificacion, ciudad }) =>
    Task.where(
      "#actor crea el cliente",
      Enter.theValue(nombre).into(ClientFormPage.nombreField()),
      Enter.theValue(apellido).into(ClientFormPage.apellidosField()),
      Enter.theValue(identificacion).into(ClientFormPage.identificacionField()),
      Enter.theValue(ciudad).into(ClientFormPage.ciudadField()),
      Click.on(ClientFormPage.firstCiudadOption()),
      Click.on(ClientFormPage.guardarButton())
    ),
};
