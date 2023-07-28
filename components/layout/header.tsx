import LightModeButton from '@/components/layout/lightModeButton';
import LocaleButton from '@/components/layout/localeButton';
import AccountIcon from '../../assets/icons/account.svg';

import Link from 'next/link';
import { Logo } from '@/components/layout/logo';

function SignInButton() {
    // const session = useSession();

    return (
        <Link className={'w-8 h-8'} href={'api/auth/signin'}>
            <AccountIcon />
        </Link>
    );
}

const Header = () => {
    return (
        <>
            <header className={'items-center fixed w-full bg-white dark:bg-black'}>
                <nav className={'container flex h-14 items-center mx-auto gap-x-4'}>
                    <Logo />
                    <div className={'grow'} />
                    <LightModeButton />
                    <LocaleButton />
                    <SignInButton />
                </nav>
            </header>
        </>
    );
};

export default Header;
