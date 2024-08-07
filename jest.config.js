/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^icons/(.*)$": "<rootDir>/src/icons/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^i18n/(.*)$": "<rootDir>/src/locales/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    './setupTests.ts'
  ],
  moduleDirectories: ["node_modules", "src"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    './src/services/api': {
      statements: 0,
    },
  },
};