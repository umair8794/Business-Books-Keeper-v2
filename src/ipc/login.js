const { ipcMain } = require("electron");
const appConfigs = require("../configs/app");

ipcMain.handle("login", (event, credentials) => {
  const db = require("better-sqlite3")(
    appConfigs.databaseName,
    appConfigs.databaseConfigs
  );
  const result = db
    .prepare("SELECT * from User WHERE username = ? AND password = ?")
    .get(credentials.username, credentials.password);
  db.close();

  return result;
});
