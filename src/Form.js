import { useState } from "react"

function useForm() {
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    function handleInputChange(event) {
        const { name, value} = event.target

        setData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    return {
        data:data,
        onUpdate:handleInputChange
    }
}

export function Form() {

    const{data,onUpdate}=useForm()

    console.log(data)

    return (
        <div>
            <input onChange={onUpdate} value={data.username} name="username" />
            <input onChange={onUpdate} value={data.password} name="password" type="password" />
        </div>
    )
}
