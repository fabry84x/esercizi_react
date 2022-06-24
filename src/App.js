import { useState } from "react";
import { Counter } from "./Counter";

export function App () {
    const [showCounter,setShowCounter] = useState(true)

    setTimeout(() => {
        setShowCounter(s => !s)
    },5000)

    return(
        <div>
            { showCounter && <Counter /> }
        </div>
    )
}