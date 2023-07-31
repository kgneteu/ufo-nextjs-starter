import { GetStaticProps } from 'next';
import { getLocaleProps } from '@/lib/locales';

export default function Error500Page() {
    return (
        <div className={'grow flex items-center'}>
            <h1 className={'text-5xl font-bold'}>
                <span className={'text-red-500 text-8xl'}>500</span>
                <span>Server error</span>
            </h1>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    return getLocaleProps(context);
};
