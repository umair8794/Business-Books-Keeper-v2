const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("database", {
  login: (credentials) => {
    const result = ipcRenderer.invoke("login", credentials);
  },
});
