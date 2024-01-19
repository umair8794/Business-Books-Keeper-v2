module.exports = function (userType = "guest") {
  const menu = [];

  if (process.platform === "darwin") {
    menu.push(require("./mac"));
  }

  if (userType === "admin") {
    menu.push(require("./admin"));
  } else if (userType === "user") {
    menu.push(...require("./user"));
  }

  menu.push(require("./common"));

  return menu;
};
