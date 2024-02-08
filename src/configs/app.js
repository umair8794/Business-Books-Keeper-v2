const appName = "Business Books Keeper";

module.exports = {
  name: appName,
  databaseName: "bbk.db",
  mainWindowConfigs: {
    title: appName,
    minWidth: 800,
    minHeight: 700,
    icon: "../ui/assets/App-Icon.png",
    center: true,
  },
  databaseConfigs: {
    fileMustExist: true,
    verbose: console.log,
  },
};
