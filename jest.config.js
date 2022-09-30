module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@config(.*)$': '<rootDir>/src/config$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^@state(.*)$': '<rootDir>/src/state$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
  ],
};
