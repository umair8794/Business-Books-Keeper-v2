import buildMenuItem from "./builder";

export default {
  ...buildMenuItem("support", "Support"),
  submenu: [
    buildMenuItem("about", "About", "about"),
    buildMenuItem("devTools", "Developer Tools", "toggleDevTools"),
  ],
};
