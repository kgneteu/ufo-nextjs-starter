import { GetStaticProps } from 'next';
import T from '@/components/UI/t';

export default function Home() {
    return (
        <main>
            <T id={'home.hello'} />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    return {
        props: {
            messages: (await import(`@/locales/${context.locale}.json`)).default,
        },
    };
};
