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
                gray: colors.gray,
                white: '#fff',
                black: '#000',
                transparent: 'transparent',
                current: 'currentColor',
                primary: {
                    DEFAULT: colors.sky['600'],
                    dark: colors.sky['400'],
                    light: colors.sky['500'],
                },
                secondary: colors.emerald['300'],
                error: {
                    DEFAULT: colors.red['600'],
                    dark: colors.red['400'],
                    light: colors.sky['500'],
                },
                text: {
                    primary: colors.white,
                    secondary: colors.black,
                    disabled: colors.gray['400'],
                },
                body: {
                    DEFAULT: colors.white,
                    dark: colors.black,
                },
                border: {
                    DEFAULT: colors.black,
                    dark: colors.white,
                },
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '15px',
                    sm: '20px',
                },
            },
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            function extractColorVars(colorObj, colorGroup = '') {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey];

                    const newVars =
                        typeof value === 'string'
                            ? { [`--color${colorGroup}-${colorKey}`]: value }
                            : extractColorVars(value, `-${colorKey}`);

                    return { ...vars, ...newVars };
                }, {});
            }

            addBase({
                ':root': extractColorVars(theme('colors')),
            });
        },
    ],
};
