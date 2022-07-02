import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export function GithubUser () {

    const {username} = useParams()

    const [data,setData]=useState()

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(response=>{
            return response.json()
        })
        .then(json=>{
            setData(json)
        })
    },[username])

    return(
        <h3>
            {data && data.name}
        </h3>
    )
} 