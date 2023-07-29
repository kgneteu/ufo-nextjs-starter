import { render, screen } from '@testing-library/react';
import Error500Page, { getStaticProps } from '@/pages/500';
import { pick } from 'lodash';
import messages from '@/locales/en.json';
import { NextIntlClientProvider } from 'next-intl';

describe('Error500', () => {
    test('should render', () => {
        render(
            <NextIntlClientProvider locale='en' messages={pick(messages, ['error'])}>
                <Error500Page />
            </NextIntlClientProvider>
        );
        expect(screen.getByText(/server error/i)).toBeInTheDocument();
    });

    test('should return messages', async () => {
        const context = {
            locale: 'en',
        };
        const props = await getStaticProps(context);
        expect(props).toHaveProperty('props.messages.error');
    });
});
