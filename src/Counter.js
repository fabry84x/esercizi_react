import { useEffect,useState } from "react"

export function Counter () {
        
    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        setInterval(()=>{
            setCount((c) => c + 1)
        }, 1000)

        return () => {
            console.log('I am unmounting...')
        }
    },[])
    


    return <h1>Count: {count}</h1>
    
} 