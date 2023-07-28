import { GetStaticProps } from 'next';
import T from '@/components/shared/t';

export default function Home() {
    const a = 56;
    console.log(a);
    return (
        <main>
            <T id={'home.hello'} />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    return {
        props: {
            messages: (await import(`@/messages/${context.locale}.json`)).default,
        },
    };
};
