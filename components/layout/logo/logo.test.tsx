import { render } from '@testing-library/react';
import { Logo } from '@/components/layout/logo/logo';

describe('Logo', () => {
    test('should render with proper class', () => {
        const { container } = render(<Logo />);
        expect(container.firstChild).toHaveClass('App-Logo');
    });
});
