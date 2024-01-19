const buildMenuItem = require("./builder");

module.exports = {
  ...buildMenuItem("support", "Support"),
  submenu: [
    buildMenuItem("about", "About", "about"),
    buildMenuItem("devTools", "Developer Tools", "toggleDevTools"),
  ],
};
