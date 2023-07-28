module.exports = {
    // check typescript
    '**/*.(ts|tsx)': () => 'tsc-files --noEmit --pretty',

    // Lint & prettify JS/TS
    '**/*.(ts|tsx|js|jsx)': filenames => [
        `eslint --fix ${filenames.join(' ')}`,
        `prettier --write ${filenames.join(' ')}`,
    ],

    // Prettify markdown
    '**/*.(md)': filenames => `prettier --write ${filenames.join(' ')}`,
};
