import { useNavigate } from "react-router-dom";
import { BasicProductResponse } from "../../types/Product";

interface ProductProps {
    product?: BasicProductResponse;
    showModal: boolean;
    hiddenModal: () => void;
}

export default function ModalAddCart({ product, showModal, hiddenModal }: ProductProps) {
    const navigate = useNavigate()

    return (
        <>
            {
                showModal ? <div className="flex absolute items-center justify-center inset-0 h-full w-full bg-black/50">
                    <div className="max-w-[900px] rounded overflow-hidden shadow-md bg-white px-6 py-4">
                        <h1 className="text-center font-bold mt-2">Produto adicionado ao carrinho</h1>
                        <div className="flex flex-row my-6">
                            <div className="flex justify-center mr-6">
                                <img className="w-56" src={product?.url} alt="Sunset in the mountains" />
                            </div>
                            <div>
                                <div className='flex flex-wrap'>
                                    <div>
                                        <p className='text-slate-500'>{product?.description}</p>
                                        <p className='font-bold text-xl text-[#17cc11]'>R$ {product?.value}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center mt-6'>
                                    <button
                                        onClick={hiddenModal}
                                        className='w-42 px-4 py-2 text-sm font-semibold text-[#FF6500] border border-[#FF6500] hover:bg-[#FF6500] hover:text-white'
                                    >
                                        Continuar comprando
                                    </button>
                                    <button
                                        onClick={() => navigate('/cart')}
                                        className='w-42 px-4 py-2 mx-2 text-sm font-semibold text-[#FF6500] border border-[#FF6500] hover:bg-[#FF6500] hover:text-white'
                                    >
                                        Ir para o carrinho
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>: null
            }
        </>
    )
}