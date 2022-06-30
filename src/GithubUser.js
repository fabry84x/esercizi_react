import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

function useGithubUser(username) {
    const { data } = useSWR(`https://api.github.com/users/${username}`, fetcher)
    
    return {
        user: data,
        error: !username
    }
}

export function GithubUser({username}) {

    const { user,error } = useGithubUser(username)

    return (
        <div>
            {user && <h1>{user.name}</h1>}
            {error && <h1>User Not Found</h1>}
        </div>
    )
}  