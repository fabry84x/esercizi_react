import { useCallback, useState } from "react"

function useCounter(initialValue=0) {
    const[counter,setCounter]=useState(initialValue)

    const handleCounterIncrement = useCallback(function handleCounterIncrement () {
        setCounter((c) => c + 1)
    },[])

    const handleCounterDecrement = useCallback(function handleCounterDecrement() {
        setCounter((c) => c - 1)
    },[])

    const handleCounterReset = useCallback(function handleCounterReset() {
        setCounter(initialValue)
    },[initialValue])
    
    return {
        counter: counter,
        onIncrement:handleCounterIncrement,
        onDecrement:handleCounterDecrement,
        onReset:handleCounterReset
    }

}

export function ClickCounter({initialValue=0}) {

    const {counter,onIncrement,onDecrement,onReset} = useCounter(initialValue)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )

}   
