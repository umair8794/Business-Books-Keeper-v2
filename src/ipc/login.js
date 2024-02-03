const { ipcMain } = require("electron");
const betterSqlite = require("better-sqlite3");
const appConfigs = require("../configs/app");

ipcMain.handle("login", (event, credentials) => {
  const db = betterSqlite(appConfigs.databaseName, appConfigs.databaseConfigs);
  const result = db
    .prepare("SELECT * from User WHERE username = ? AND password = ?")
    .get(credentials.username, credentials.password);
  db.close();

  return result;
});
