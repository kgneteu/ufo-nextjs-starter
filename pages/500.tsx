import { GetStaticProps } from 'next';

export default function Error500Page() {
    return <h1>500 - Server error occurred</h1>;
}

export const getStaticProps: GetStaticProps = async context => {
    return {
        props: {
            messages: (await import(`@/locales/${context.locale}.json`)).default,
        },
    };
};
