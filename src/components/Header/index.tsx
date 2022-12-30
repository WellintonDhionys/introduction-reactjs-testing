import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className='mt-2'>
            <div className="container flex items-right justify-between h-full mx-auto">
                <div className="flex w-full justify-end p-2">
                    <button className='relative inline-block'>
                        <FontAwesomeIcon icon={faCartShopping} size="lg" color='#c1c1c1' />
                        <span className="absolute top-[-5px] right-[-5px] text-[0.55rem] text-white bg-red-500 font-bold px-1 py-0 rounded-full">1</span>
                    </button>
                </div>
            </div>
        </header>
    )
}