import { useEffect, useRef, useState } from "react"

export function CarDetails() {
    const [model,setModel]=useState('fiat')
    const [year,setYear]=useState(2022)
    const [color,setColor]=useState('blue')

    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.value=""
    },[])
    
    function handleModelChange(event) {
        setModel(event.target.value)
    }

    function handleYearChange(event) {
        setYear(event.target.value)
    }

    function handleColorChange(event) {
        setColor(event.target.value)
    }


    
    return (
        <div>
            <form >
                <input ref={inputRef} value={model} onChange={handleModelChange}/>
                <input ref={inputRef} value={year} onChange={handleYearChange}/>
                <input ref={inputRef} value={color} onChange={handleColorChange}/>
            </form>
        </div>
    )
}
