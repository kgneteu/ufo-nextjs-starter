import Footer from '@/components/layout/footer/footer';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '@/locales/en.json';
import { pick } from 'lodash';

describe('Footer', () => {
    test('should render copyright', () => {
        render(
            <NextIntlClientProvider locale='en' messages={pick(messages, ['footer'])}>
                <Footer />
            </NextIntlClientProvider>
        );
        expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    });
});
