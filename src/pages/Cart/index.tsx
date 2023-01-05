import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Count } from '../../components';

import { useCart } from '../../hooks/cart'
import { useEffect } from 'react';

export function Cart() {
  const { products, getProducts } = useCart()

  useEffect(() => {
    (async () => {
      await getProducts()
    })()
  }, [])

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center my-20">
      <h1 className='text-2xl text-white font-black mt-1'>Cart</h1>
      <div className='p-4'>
        {
          products && products.map(product => (
          <div key={product.id} className="w-[900px] overflow-hidden shadow-md bg-white px-6 py-4">
            <div className="flex flex-row w-full my-6">
              <div className="flex justify-center w-1/4 mr-6">
                <img className="w-56" src={product?.url} alt="Sunset in the mountains" />
              </div>
              <div className='flex flex-wrap w-1/4'>
                <div className="max-w-[300px]">
                  <p className='text-slate-500 text-sm'>{product?.description}</p>
                  <p className='font-bold text-[#17cc11] text-sm'>R$ {product?.value}</p>
                </div>
              </div>
              <Count />
              <div className="flex flex-wrap items-center justify-cente w-1/12">
                <p className='font-bold text-xs'>R$ {product?.value}</p>
              </div>
              <div className="flex flex-wrap items-center justify-end w-1/12">
                <button className="w-8 h-8"><FontAwesomeIcon icon={faTrash} color="#cc1111" /></button>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}