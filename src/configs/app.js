const appName = "Business Books Keeper";

module.exports = {
  name: appName,
  databaseName: "bbk.db",
  mainWindowConfigs: {
    title: appName,
    minWidth: 800,
    minHeight: 700,
    icon: "../assets/App-Icon.png",
    backgroundColor: "#F0F0F0",
    center: true,
  },
  databaseConfigs: {
    fileMustExist: true,
    verbose: console.log,
  },
};
