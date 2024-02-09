import buildMenuItem from "./builder";

export default {
  ...buildMenuItem("adminPanel", "Admin Panel"),
  submenu: [
    buildMenuItem("adminPanelHome", "Home"),
    buildMenuItem("changePassword", "Change Password"),
    buildMenuItem("logout", "Logout"),
  ],
};
