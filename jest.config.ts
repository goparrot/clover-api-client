/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
    preset: 'ts-jest/presets/js-with-ts',

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/interface/**', '!<rootDir>/src/**/enum/**', '!<rootDir>/src/**/model/**'],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ['<rootDir>/jest.setup.ts'],

    // The number of seconds after which a test is considered as slow and reported as such in the results.
    slowTestThreshold: 100,

    // The test environment that will be used for testing
    testEnvironment: 'node',

    testMatch: ['<rootDir>/test/**/*.spec.ts'],

    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
};
