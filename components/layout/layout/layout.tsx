import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import { ReactNode } from 'react';
import { Main } from '@/components/layout/main/main';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={'flex min-h-screen flex-col items-center justify-between'}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
}
