document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", async () => {
    const isDarkMode = await window.darkMode.toggle();
    document.getElementById("theme-source").innerText = isDarkMode
      ? "Dark"
      : "Light";
  });

document
  .getElementById("reset-to-system")
  .addEventListener("click", async () => {
    await window.darkMode.system();
    document.getElementById("theme-source").innerText = "System";
  });

// ipc tester code
// const func = async () => {
//   const response = await window.versions.ping();
//   const ipcTester = document.getElementById("ipc-tester");
//   information.innerText = response;
// };

// func();
