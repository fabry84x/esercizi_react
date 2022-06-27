import { useEffect, useState } from "react"

function useGithubUser(username) {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [username])

    return data
}
export function GithubUser({ username }) {

const data = useGithubUser(username)

    return (
        <div>
            {data && <h1>{data.name}, {data.location}</h1>}
        </div>
    )
} 