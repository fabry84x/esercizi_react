import { useState } from "react"

export function Counter({initialValue=0}) {

    const [count, setCount] = useState(initialValue)

    function handleCounterIncrement () {
        setCount((c) => c + 1)
    }


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )

}  