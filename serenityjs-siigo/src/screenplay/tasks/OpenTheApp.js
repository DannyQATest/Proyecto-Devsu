const { Task } = require("@serenity-js/core");
const { Navigate } = require("@serenity-js/web");
const { baseUrl } = require("../../config/env");

const OpenTheApp = () =>
  Task.where(`#actor abre la aplicación`, Navigate.to(baseUrl));

module.exports = { OpenTheApp };
