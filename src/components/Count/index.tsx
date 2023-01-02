import { useEffect, useState } from "react"

export default function Count() {
    const [count, setCount] = useState(1)
    const [disabled, setDisabled] = useState(false)

    const increment = () => {
        setCount(current => current + 1)
    }

    const decrement = () => {
        setCount(current => current - 1)
    }

    useEffect(() => {
        setDisabled(false)
        if (count <= 0) setDisabled(true)
    }, [count])

    return (
        <div className="flex flex-wrap items-center justify-center w-1/3 bg-[#fff]">
            <button onClick={decrement} disabled={disabled} className="w-8 h-8 font-semibold text-[#000] border border-[#000]">-</button>
            <input className="w-8 h-8 outline-none text-center text-sm border border-y-[#000]" defaultValue={count} />
            <button onClick={increment} className="w-8 h-8 font-semibold text-[#000] border border-[#000]">+</button>
        </div>
    )
}