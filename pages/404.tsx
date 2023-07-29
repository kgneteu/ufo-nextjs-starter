import { GetStaticProps } from 'next';

export default function Error404Page() {
    return <h1>404 - Page Not Found</h1>;
}

export const getStaticProps: GetStaticProps = async context => {
    return {
        props: {
            messages: (await import(`@/locales/${context.locale}.json`)).default,
        },
    };
};
