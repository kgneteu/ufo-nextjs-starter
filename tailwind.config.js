// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: {
                    DEFAULT: colors.sky['600'],
                    dark: colors.sky['700'],
                    light: colors.sky['500'],
                },
                secondary: colors.emerald['300'],
                text: {
                    primary: colors.white,
                    secondary: colors.black,
                    disabled: colors.gray['400'],
                },
            },
        },
    },
    plugins: [],
};
