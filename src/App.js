import { ClickCounter } from "./ClickCounter";

export function App () {

    const onCounterChange = (count) => {
        console.log ('the count is now '+ count)
    }
    return(
        <div>
            <ClickCounter logCount={onCounterChange}/>
        </div>
    )
}