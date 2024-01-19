const buildMenuItem = require("./builder");

module.exports = {
  ...buildMenuItem("adminPanel", "Admin Panel"),
  submenu: [
    buildMenuItem("adminPanelHome", "Home"),
    buildMenuItem("changePassword", "Change Password"),
    buildMenuItem("logout", "Logout"),
  ],
};
