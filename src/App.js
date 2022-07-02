import { Routes, Route } from "react-router-dom"
import {Welcome} from "./Welcome"
import {Counter} from "./Counter"
import {ShowGithubUser} from "./ShowGithubUser"
import { NotFound } from "./NotFound"
import {GithubUserList} from "./GithubUserList"
import { GithubUser } from "./GithubUser"
export function App() {
    return(
        <Routes>
            <Route path="/" element={<Welcome name='Fabio'/>} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/users" element={<GithubUserList />} />
            <Route path="/showuser" element={<ShowGithubUser />}>
                <Route index element={<p>Add a user and select it</p>}/>
                <Route path=":username" element={<GithubUser />}/>
            </Route>
            

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}