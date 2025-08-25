const { Task } = require("@serenity-js/core");
const { Click } = require("@serenity-js/web");
const TopBar = require("../ui/TopBar");
const { ClickShadowButton } = require("../support/ShadowDomInteractions");

const OpenCreateClient = () =>
  Task.where(
    `#actor abre el formulario de creación de cliente`,
    Click.on(TopBar.createButton()),
    Click.on(TopBar.clientesOption())
  );

module.exports = { OpenCreateClient };
