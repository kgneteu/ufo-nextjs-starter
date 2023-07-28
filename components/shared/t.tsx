import { useTranslations } from 'next-intl';

export default function T({ id }: { id: string }) {
    const t = useTranslations();
    return <>{t(id)}</>;
}
