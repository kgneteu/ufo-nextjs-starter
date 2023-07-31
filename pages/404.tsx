import { GetStaticProps } from 'next';
import { getLocaleProps } from '@/lib/locales';

export default function Custom404() {
    return (
        <div className={'grow flex items-center container break-all'}>
            <h1 className={'text-5xl font-bold'}>
                <span className={'text-red-500 text-8xl'}>404</span>
                <span>Page Not Found</span>
            </h1>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    return getLocaleProps(context);
};
