const { Task, Duration } = require("@serenity-js/core");
const { Enter, Click } = require("@serenity-js/web");
const LoginPage = require("../ui/LoginPage");

module.exports = {
  Login: (username, password) =>
    Task.where(
      `#actor inicia sesión`,
      Enter.theValue(username).into(LoginPage.usernameField()),
      Enter.theValue(password).into(LoginPage.passwordField()),
      Click.on(LoginPage.loginButton())
    ),
};
