import { Routes, Route } from "react-router-dom"
import {Welcome} from "./Welcome"
import {Counter} from "./Counter"
import {ShowGithubUser} from "./ShowGithubUser"
import {GithubUser} from "./GithubUser"


export function App() {
    return(
        <Routes>
            <Route path="/" element={<Welcome name='Fabio'/>} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/users" element={<ShowGithubUser />}>
                <Route path=":username" element={<GithubUser />}/>
            </Route>
        </Routes>
    )
}