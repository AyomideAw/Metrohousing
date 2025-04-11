module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom", 
    moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
    testMatch: ["**/src/tests/**/*.test.ts?(x)"], 
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], 
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", 
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
  };