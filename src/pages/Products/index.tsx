import { useState } from "react"
import { CardProduct, ModalAddCart } from "../../components"
import { useCart } from "../../hooks/cart";
import { BasicProductResponse } from "../../types/Product"

const products = [
  {
    id: '1',
    description: 'Smart TV Samsung 50 Polegadas',
    price: 3400,
    priceStr: '3.400,00',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '2',
    description: 'Smartphone Philco Hit P8',
    price: 512.05,
    priceStr: '512,05',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '3',
    description: 'Headset Gamer Havit',
    price: 209.99,
    priceStr: '209,99',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '4',
    description: 'Smartphone Philco Hit P8',
    price: 512.05,
    priceStr: '512,05',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  },
  {
    id: '5',
    description: 'Headset Gamer Havit',
    price: 209.99,
    priceStr: '209,99',
    url: 'https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80'
  }
];

export function Products() {
  const { addCartItem } = useCart()

  const [selectedProduct, setSelectedProduct] = useState<BasicProductResponse>()
  const [showModal, setShowModal] = useState(false)

  const hiddenModal = () => {
    setShowModal(false)
    setSelectedProduct(undefined)
  }

  const handleSelectProduct = (product: BasicProductResponse) => {
    addCartItem(product)
    setSelectedProduct(product)
    setShowModal(true)
  }

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center my-20">
      <h1 className='text-2xl text-white font-black mt-1'>Shopping Cart</h1>
      <div className='flex flex-col items-center my-4 bg-[#fff]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4'>
          {
            products && products.map(product => <CardProduct key={product.id} product={product} handleSelectProduct={handleSelectProduct} />)
          }
        </div>
        <ModalAddCart product={selectedProduct} showModal={showModal} hiddenModal={hiddenModal} />
      </div>
    </div>
  )
}