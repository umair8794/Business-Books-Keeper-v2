const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("database", {
  login: (credentials) => {
    return ipcRenderer.invoke("login", credentials);
  },
});
