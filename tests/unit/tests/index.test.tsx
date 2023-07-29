import Home from '@/pages';
import { render, screen } from '@testing-library/react';

describe('Index', () => {
    test('should render', () => {
        render(<Home />);
        screen.debug();
    });
});
