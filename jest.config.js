/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["./setup-jest.js"],
  testEnvironment: "jsdom",
};

module.exports = config;
