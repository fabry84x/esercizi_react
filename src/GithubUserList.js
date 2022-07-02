import {useState, useEffect} from 'react';

export function GithubUserList() {

    const [data,setData]=useState()

    useEffect(()=>{
        fetch(`https://api.github.com/users`)
        .then(response=>{
            return response.json()
        })
        .then(json=>{
            setData(json)
        })
    },[])

   
   return(
        <div>
            {data && (
                <ul>
                    {data.map((user)=>(<li key={user.login}>{user.login}</li>))}
                </ul>
            )}
        </div>
    )
   
}