import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Products } from '.'

const setup = () => {
    const products = render(
        <BrowserRouter>
            <Products />
        </BrowserRouter>
    )
    return {
        products
    }
}

describe('Products Screen', () => {
    test('should render the shopping cart title', () => {
        const { products } = setup()

        const shoppingCart = products.getByText('Shopping Cart')

        expect(shoppingCart).toBeInTheDocument()
    })

    test('should render all card button', () => {
        const { products } = setup()

        const buttons = products.getAllByRole('button')

        expect(buttons.length).toEqual(5)
    })
})