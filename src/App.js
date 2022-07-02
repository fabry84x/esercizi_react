import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";


export function App () {
    const [username,setUsername] =useState('')

    return(
        <div>
            <GithubUserList />
            <input value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <GithubUser username={username}/> 
        </div>
    )
}