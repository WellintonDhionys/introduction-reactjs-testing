import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Count from '../../components/Count';

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
  }
];

function Cart() {
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
  );
}

export default Cart;