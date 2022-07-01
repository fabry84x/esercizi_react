import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

function useGithubUser(username) {
    const { data, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    function handleRefreshUser() {
        mutate()
    }
    
    return {
        user: data,
        error: !username,
        onRefresh:handleRefreshUser
    }
}

export function GithubUser({username}) {

    const { user,error,onRefresh } = useGithubUser(username)

    return (
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {user && <h1>{user.name}</h1>}
            {error && <h1>User Not Found</h1>}
        </div>
    )
}  