import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from '.';

describe('Products Screen', () => {
    test('should render the shopping cart title', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Products />
            </BrowserRouter>
        )

        expect(getByText('Shopping Cart')).toBeInTheDocument()
    })

    test('should render all card button', () => {
        const { getAllByRole } = render(
            <BrowserRouter>
                <Products />
            </BrowserRouter>
        )

        expect(getAllByRole('button').length).toEqual(5)
    })
})