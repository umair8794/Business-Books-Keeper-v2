const information = document.getElementById("info");

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

// ipc tester code
// const func = async () => {
//   const response = await window.versions.ping();
//   const ipcTester = document.getElementById("ipc-tester");
//   information.innerText = response;
// };

// func();
