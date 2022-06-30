import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

export function GithubUser({ username }) {

    const { data } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return (
        <div>
            {data && <h1>{data.name}, {data.location}</h1>}
        </div>
    )
}  