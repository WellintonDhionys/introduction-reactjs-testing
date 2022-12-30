import { BasicProductResponse } from "../../types/Product";

interface ProductProps {
    product?: BasicProductResponse;
}

export default function CardProduct({ product }: ProductProps) {
    return (
        <div className='w-56 rounded overflow-hidden shadow-md bg-[#fff]'>
            <img className="w-full" src={product?.url} alt={product?.description} />
            <div className='px-4 py-4'>
                <p className='text-slate-500 text-sm'>{product?.description}</p>
                <p className='font-bold text-lg text-[#17cc11]'>R$ {product?.value}</p>
            </div>
            <div className='px-4'>
                <button
                    role="button"
                    className='px-4 py-2 text-sm font-semibold text-[#FF6500] border border-[#FF6500] mt-2 mb-2 hover:bg-[#FF6500] hover:text-white'
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}