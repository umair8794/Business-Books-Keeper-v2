/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["./setup-jest.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(png)$": "<rootDir>/src/ui/mocks/imageMock.js",
  },
};

module.exports = config;
