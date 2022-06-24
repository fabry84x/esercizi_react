import { useEffect, useState } from "react"

export function GithubUser ({username}) {

    const [data,setData]=useState()

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(response=>{
            return response.json()
        })
        .then(json=>{
            console.log(json)
            setData(json)
        })
    },[username])

    return(
        <div>
            {data && data.name}, {data && data.location}
        </div>
    )
}