import { useState } from 'react';

function useGithubUser() {
    const [data, setData] = useState()

    async function fetchGithubUser(username) {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        setData(json)
    }
    return { data, onFetchuser: fetchGithubUser }
}

export function GithubUser({ username }) {
    const { data, onFetchuser } = useGithubUser(username)

    function handleLoadUserData() {
        onFetchuser(username)
    }
    return (
        <div>
            <button onClick={handleLoadUserData} >Load user data</button>
            {data && <h1>{data.name}</h1>}
        </div>
    )
}
