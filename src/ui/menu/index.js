module.exports = function (userType = "guest") {
  const menu = [];

  if (process.platform === "darwin") {
    menu.push(require("./mac").default);
  }

  if (userType === "admin") {
    menu.push(require("./admin").default);
  } else if (userType === "user") {
    menu.push(...require("./user").default);
  }

  menu.push(require("./common").default);

  return menu;
};
