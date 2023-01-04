import { useEffect, useState, ChangeEvent } from "react"

export default function Count({ id }: any) {
    const [count, setCount] = useState(1)
    const [disabled, setDisabled] = useState(false)

    const increment = () => {
        setCount(current => current + 1)
    }

    const decrement = () => {
        setCount(current => current - 1)
    }

    const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCount(Number(e.target.value))
    }

    useEffect(() => {
        setDisabled(false)
        if (count <= 1) {
            setDisabled(true)
            setCount(1)
        }
    }, [count])

    return (
        <div className="flex flex-wrap items-center justify-center w-1/3 bg-[#fff]">
            <button
                onClick={decrement}
                disabled={disabled}
                role="decrement-button"
                className="w-8 h-8 font-semibold text-[#000] border border-[#000]"
            >-</button>
            <input
                onChange={handleChangeInputValue}
                value={count}
                type="number"
                min="1"
                role="input-count"
                className="w-8 h-8 outline-none text-center text-sm border border-y-[#000]"
            />
            <button
                onClick={increment}
                role="increment-button"
                className="w-8 h-8 font-semibold text-[#000] border border-[#000]"
            >+</button>
        </div>
    )
}