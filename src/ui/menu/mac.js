import buildMenuItem from "./builder";
import { app as appResources } from "../../resources";

export default {
  ...buildMenuItem("app", appResources.name),
  submenu: [buildMenuItem("quit", "Quit", "quit")],
};
