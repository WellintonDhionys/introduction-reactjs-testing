import './main.css'

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

function App() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center my-20">
      <h1 className='text-2xl text-white font-black mt-1'>Shopping Cart</h1>
      <div className='flex flex-col items-center my-4 bg-[#fff]'>
        <ul className='grid grid-cols-3 gap-3 p-4'>
          {
            products && products.map(product => (
              <li className='max-w-[300px] rounded overflow-hidden shadow-md bg-[#fff]'>
                <img className="w-full" src={product.url} alt={product.description} />
                <div className='px-4 py-4'>
                  <p className='text-slate-500'>{product.description}</p>
                  <p className='font-bold text-xl text-[#17cc11]'>R$ {product.value}</p>
                </div>
                <div className='px-4'>
                  <button
                    className='px-4 py-2 text-sm font-semibold text-[#FF6500] border border-[#FF6500] mt-2 mb-2 hover:bg-[#FF6500] hover:text-white'
                  >
                    Add to cart
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
