module.exports = {
  // collectCoverageFrom: [
  //   '**/*.{js,jsx,ts,tsx}',
  //   '!**/*.d.ts',
  //   '!**/node_modules/**',
  // ],
  //setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.js'],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js']
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  // },
  // transformIgnorePatterns: [
  //   '/node_modules/',
  //   '^.+\\.module\\.(css|sass|scss)$',
  // ],
  // moduleNameMapper: {
  //   '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  // },
}
