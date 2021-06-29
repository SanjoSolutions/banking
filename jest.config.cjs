module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resolver: 'jest-ts-webcompat-resolver',
  setupFilesAfterEnv: ['jest-extended'],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "\\.pnp\\.[^\\/]+$"
  ],
};
