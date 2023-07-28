import Link from 'next/link';
import LogoImage from '@/assets/logo.svg';

export function Logo() {
    return (
        <Link className={'w-[96px] h-[30px] dark:text-gray-50'} href={'/'}>
            <LogoImage />
        </Link>
    );
}
