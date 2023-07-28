import { useRouter } from 'next/router';
import { DropDownButton, DropDownButtonItem } from '@/components/shared/dropDownButton';
import PLIcon from '../../assets/icons/pl.svg';
import ENIcon from '../../assets/icons/en.svg';
import { useTranslations } from 'next-intl';

export default function LocaleButton() {
    const t = useTranslations();
    const router = useRouter();
    const { locale } = router;

    const localeMenu: DropDownButtonItem[] = [
        {
            key: 'pl',
            title: t('Menu.pl'),
            icon: (
                <div className='w-8 h-8 rounded-full border-2 overflow-hidden'>
                    <PLIcon className={'h-full'} />
                </div>
            ),
        },
        {
            key: 'en',
            title: t('Menu.en'),
            icon: (
                <div className={'w-8 h-8 rounded-full border-2 overflow-hidden'}>
                    <ENIcon className={'h-full -ml-[5px]'} />
                </div>
            ),
        },
    ];

    function handleChange(v: string) {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: v });
    }

    return <DropDownButton items={localeMenu} onChange={handleChange} value={locale} />;
}
