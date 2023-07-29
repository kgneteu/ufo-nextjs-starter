import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import { SessionProvider } from 'next-auth/react';
import { Layout } from '@/components/layout/layout/layout';
import { ThemeProvider } from 'next-themes';

// const m = {
//     home: {
//         home: 'home',
//         hello: 'Hello!',
//     },
//     footer: {
//         copyright: '© Copyright M. Zdolski. MIT Licence.',
//     },
//     menu: {
//         pl: 'Polish',
//         en: 'English',
//         changeLanguageHint: 'Change language',
//     },
// };

export default function App({ Component, pageProps: { session, messages, ...pageProps } }: AppProps) {
    // let timeout: number;
    // useEffect(() => {
    //     const scrollSaver = () => {
    //         if (timeout) {
    //             window.cancelAnimationFrame(timeout);
    //         }
    //
    //         timeout = window.requestAnimationFrame(function () {
    //             const body = document.querySelector('body');
    //             if (body) {
    //                 body.dataset.scroll = window.scrollY.toString();
    //             }
    //         });
    //     };
    //     document.addEventListener('scroll', scrollSaver, { passive: true });
    //     return () => {
    //         document.removeEventListener('scroll', scrollSaver);
    //     };
    // });

    return (
        <NextIntlProvider messages={messages}>
            <SessionProvider session={session}>
                <ThemeProvider attribute='class'>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </SessionProvider>
        </NextIntlProvider>
    );
}
