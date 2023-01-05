import React, { createContext, useContext, useState } from 'react'
import { BasicProductResponse } from '../../types/Product'

const productItems = [
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

interface CartContextData {
    products: BasicProductResponse[];
    getProducts: () => Promise<void>;
}

interface Props {
    children: React.ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData)

const CartProvider: React.FC<Props> = ({ children }) => {
    const [products, setProducts] = useState<BasicProductResponse[]>([])

    async function get() {
        return new Promise<BasicProductResponse[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(productItems)
            }, 1000)
        })
    }

    async function getProducts() {
        const response = await get()
        setProducts(response)
    }

    return (
        <CartContext.Provider
            value={{
                products,
                getProducts
            }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(): CartContextData {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used with CartProvider')
    }

    return context;
}

export { CartProvider, useCart }