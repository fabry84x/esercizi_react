import { Link, Outlet } from "react-router-dom"

export function ShowGithubUser() {
    return(
        <div>
            <h1><Link to="gianmarcotoso">Show GithubUser Details</Link></h1>
            <Outlet />
        </div>
    )
}