import { useRef } from "react"

export function CarDetails({initialData}) {


    const formRef = useRef()


    function handleFormSubmit() {
        formRef.current.reset()
    }

return (
        <div>
            <form ref={formRef} onSubmit={handleFormSubmit}>
                <input defaultValue={initialData.model} />
                <input defaultValue={initialData.year}  />
                <input defaultValue={initialData.color} />
                <input type='submit'/>
            </form>
        </div>
    )
}
