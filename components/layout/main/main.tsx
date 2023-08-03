import { ReactNode } from 'react';

export function Main({ children }: { children: ReactNode }) {
    return <main className={'mt-14 grow flex flex-col w-full'}>{children}</main>;
}
