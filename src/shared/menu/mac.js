const buildMenuItem = require("./builder");
const appConfigs = require("../../configs/app");

module.exports = {
  ...buildMenuItem("app", appConfigs.name),
  submenu: [buildMenuItem("quit", "Quit", "quit")],
};
