const { actorCalled, engage, configure } = require("@serenity-js/core");
const { ConsoleReporter } = require("@serenity-js/console-reporter");
const { Ensure, isVisible } = require("@serenity-js/assertions");
const { BrowseTheWeb } = require("@serenity-js/playwright");
const { chromium } = require("playwright");

const { Actors } = require("../screenplay/support/Actors");
const { OpenTheApp } = require("../screenplay/tasks/OpenTheApp");
const { Login } = require("../screenplay/tasks/Login");
const { OpenCreateClient } = require("../screenplay/tasks/OpenCreateClient");
const { CreateClient } = require("../screenplay/tasks/CreateClient");
const { credentials } = require("../config/env");
const { ClientFormPage } = require("../screenplay/ui/ClientFormPage");

describe("Siigo - Crear cliente (tercero) - Serenity/JS + Playwright", () => {
  let browser;

  before(async () => {
    browser = await chromium.launch({ headless: false });
    engage(new Actors(browser));
  });

  after(async function () {
    if (browser) {
      await browser.close();
    }
  });

  it("Login y creación de cliente", async () => {
    const nombre = `Cliente QA ${Date.now()}`;
    const apellido = `Cliente QA ${Date.now()}`;
    const ciudad = "Guayaquil";

    await actorCalled("QA").attemptsTo(
      OpenTheApp(),
      Login(credentials.username, credentials.password),
      OpenCreateClient(),
      CreateClient({
        nombre,
        apellido,
        identificacion: `${Date.now()}`.slice(-10).replace(/^0/, "1"),
        ciudad,
      })
    );
  });
});
