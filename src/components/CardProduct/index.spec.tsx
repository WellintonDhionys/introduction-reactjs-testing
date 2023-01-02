import { render } from '@testing-library/react';
import CardProduct from ".";

const products = [
  {
    id: '1',
    description: 'Smart TV Samsung 50 Polegadas',
    value: '3.400,00',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '2',
    description: 'Smartphone Philco Hit P8',
    value: '512,05',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '3',
    description: 'Headset Gamer Havit',
    value: '209,99',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '4',
    description: 'Smartphone Philco Hit P8',
    value: '512,05',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '5',
    description: 'Headset Gamer Havit',
    value: '209,99',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  }
];

describe('Product Component', () => {
  test('should render a description on the product card', () => {
    const { getByText } = render(<CardProduct product={products[0]} handleSelectProduct={() => {}} />)

    expect(getByText('Smart TV Samsung 50 Polegadas')).toBeInTheDocument()
  })

  test('should render a value on the product card', () => {
    const { getByText } = render(<CardProduct product={products[0]} handleSelectProduct={() => {}} />)

    expect(getByText('R$ 3.400,00')).toBeInTheDocument()
  })

  test('should be a render add button on the card', () => {
    const { getByText } = render(<CardProduct product={products[0]} handleSelectProduct={() => {}} />)

    expect(getByText('Add to cart')).toBeInTheDocument()
  })
})