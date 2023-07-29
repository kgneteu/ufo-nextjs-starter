// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const customJestConfig = {
    rootDir: '../../../',
    setupFilesAfterEnv: ['<rootDir>/tests/unit/config/jest.setup.js'],
    moduleNameMapper: {
        '^.+\\.(svg)$': '<rootDir>/tests/unit/mocks/svg.ts',
        '@/locales/en.json': '<rootDir>/locales/en.json',
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    roots: ['./components', './pages', './tests/unit/tests'],
    collectCoverageFrom: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
    coverageDirectory: './tests/unit/coverage',
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);

// module.exports = {
//     collectCoverageFrom: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
//     rootDir: '../../../',
//     coverageDirectory: './tests/unit/coverage',
// moduleNameMapper: {
//     // Handle CSS imports (with CSS modules)
//     // https://jestjs.io/docs/webpack#mocking-css-modules
//     '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
//
//     // Handle CSS imports (without CSS modules)
//     '^.+\\.(css|sass|scss)$': '<rootDir>/tests/unit/mocks/styleMock.js',
//
//     // Handle image imports
//     // https://jestjs.io/docs/webpack#handling-static-assets
//     '^.+\\.svg$': '<rootDir>/tests/unit/mocks/svg.ts',
//     '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|)$/i': '<rootDir>/tests/unit/mocks/fileMock.js',
//
//     // Handle module aliases
//     '^@/(.*)$': '<rootDir>/$1',
//     '^@assets(.*)$': '<rootDir>/assets/$1',
//     '^@locales(.*)$': '<rootDir>/locales/$1',
//     '^@css(.*)$': '<rootDir>/css/$1',
//     '^@utils(.*)$': '<rootDir>/utils/$1',
// },
// Add more setup options before each test is run
// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
// testEnvironment: 'jsdom',
// transform: {
//     // Use babel-jest to transpile tests with the next/babel preset
//     // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
//     '^.+\\.(js|jsx|ts|tsx)$': [
//         'babel-jest',
//         {
//             presets: [
//                 [
//                     'next/babel',
//                     {
//                         'preset-env': {
//                             targets: {
//                                 node: 4,
//                             },
//                             useBuiltIns: 'usage',
//                             corejs: 3,
//                         },
//                     },
//                 ],
//             ],
//             plugins: ['macros', '@babel/plugin-transform-strict-mode'],
//         },
//     ],
// },
// transformIgnorePatterns: ['/node_modules/(?!swiper/)', '^.+\\.module\\.(css|sass|scss)$'],
//     setupFilesAfterEnv: ['./tests/unit/config/jest.setup.js'],
// };
