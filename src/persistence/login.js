const { ipcMain } = require("electron");
const sqlite = require("better-sqlite3");
const dbConfigs = require("./configs");

ipcMain.handle("login", (event, credentials) => {
  const db = sqlite(dbConfigs.name, dbConfigs.options);
  const result = db
    .prepare("SELECT * from User WHERE username = ? AND password = ?")
    .get(credentials.username, credentials.password);
  db.close();

  return result;
});
