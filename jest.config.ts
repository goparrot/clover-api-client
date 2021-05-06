/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['node_modules', 'interface', 'enum', 'model'],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'json',
        // "jsx",
        'ts',
        // "tsx",
        // "node"
    ],

    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ['./jest.setup.ts'],

    // The number of seconds after which a test is considered as slow and reported as such in the results.
    slowTestThreshold: 100,

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['node_modules'],
};
