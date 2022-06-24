import { useEffect, useState } from "react"

export function ClickCounter({initialValue=0,logCount}) {

    const [count, setCount] = useState(initialValue)

    useEffect(() => {
        logCount(count)
    },[logCount,count])

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