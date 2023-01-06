import React, { createContext, useContext, useState } from 'react'
import { BasicProductResponse } from '../../types/Product'

interface CartContextData {
    cartItems: CartProps[];
    addCartItem: (product: BasicProductResponse) => void;
    removeCartItem: (id: string) => void;
}

interface CartProps {
    product: BasicProductResponse;
    quantity: number;
    total: number;
    totalStr: string;
}

type CartItem = {
    [key: string]: CartProps;
}

interface Props {
    children: React.ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData)

const CartProvider: React.FC<Props> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem>({})

    function addCartItem(product: BasicProductResponse) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })

        const existentItem = cartItems[product.id]
        if (existentItem) {
            const total = existentItem.quantity * existentItem.product.price
            existentItem.quantity++
            existentItem.total = total
            existentItem.totalStr = formatter.format(total)
            setCartItems({ ...cartItems, [product.id]: existentItem })
        } else {
            setCartItems({
                ...cartItems,
                [product.id]: { product, quantity: 1, total: product.price, totalStr: formatter.format(product.price) }
            })
        }
    }

    function removeCartItem(id: string) {
        const newCartItems = cartItems
        delete newCartItems[id]
        setCartItems({...newCartItems })
    }

    return (
        <CartContext.Provider
            value={{
                cartItems: Object.values(cartItems),
                addCartItem,
                removeCartItem
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