import { render, screen } from '@testing-library/react';
import { getStaticProps } from '@/pages/404';
import { pick } from 'lodash';
import messages from '@/locales/en.json';
import { NextIntlClientProvider } from 'next-intl';
import Custom404 from '@/pages/404';

describe('Error404', () => {
    test('should render', () => {
        render(
            <NextIntlClientProvider locale='en' messages={pick(messages, ['error'])}>
                <Custom404 />
            </NextIntlClientProvider>
        );
        expect(screen.getByText(/not found/i)).toBeInTheDocument();
    });

    test('should return messages', async () => {
        const context = {
            locale: 'en',
        };
        const props = await getStaticProps(context);
        expect(props).toHaveProperty('props.messages.error');
    });
});
