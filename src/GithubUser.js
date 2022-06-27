import { useEffect, useState } from "react"

function useGithubUser(username) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState()

    useEffect(() => {
        setLoading(true)
        setError(null)
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if(response.status !== 200) {
                    setError(new Error())
                }
                return response.json()
            })
            .then(json => {
                setData(json)   
            })
            .catch(error=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [username])

    return {data,loading,error}
}
export function GithubUser({ username }) {

const {data,loading,error} = useGithubUser(username)

    return (
        <div>
            {loading && <h1>Loading</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1>{data.name} {data.location}</h1>}
        </div>
    )
} 