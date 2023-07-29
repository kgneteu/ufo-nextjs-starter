import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/header/header';
import messages from '@/locales/en.json';
import { NextIntlClientProvider } from 'next-intl';

describe('Header', () => {
    test('should render logo', () => {
        render(
            <NextIntlClientProvider locale='en' messages={messages}>
                <Header />
            </NextIntlClientProvider>
        );
        expect(screen.getAllByRole('link')[0]).toHaveClass('App-Logo');
    });
});
