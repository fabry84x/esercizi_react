import { Routes, Route } from "react-router-dom"
import {Welcome} from "./Welcome"

export function App() {
    return(
        <Routes>
            <Route path="/" element={<Welcome name='Fabio'/>} />
        </Routes>
    )
}