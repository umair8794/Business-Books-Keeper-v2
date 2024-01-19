const buildMenuItem = require("./builder");
const appResources = require("../../resources/app");

module.exports = {
  ...buildMenuItem("app", appResources.name),
  submenu: [buildMenuItem("quit", "Quit", "quit")],
};
