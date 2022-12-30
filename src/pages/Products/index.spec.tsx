import { render } from '@testing-library/react';
import Products from '.';

describe('Products Screen', () => {
    test('should render the shopping cart title', () => {
        const { getByText } = render(<Products />)

        expect(getByText('Shopping Cart')).toBeInTheDocument()
    })

    test('should render all card button', () => {
        const { getAllByRole } = render(<Products />)

        expect(getAllByRole('button').length).toEqual(5)
    })
})