import { GetStaticProps } from 'next';

export const getLocaleProps: GetStaticProps = async context => {
    return {
        props: {
            messages: (await import(`@/locales/${context.locale}.json`)).default,
        },
    };
};
