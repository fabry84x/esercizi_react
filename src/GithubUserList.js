import {useState, useEffect} from 'react';

export function GithubUserList() {

    const[list,setList]=useState([])
    const [user,setUser] = useState("");
   
    function handleInputChange(event) {
        const value = event.target.value
        setUser(value)
    }

    function handleClick() {
        setList([...list, user]) 
    }
    
    console.log(list)
   return(
        <div>
            <input name="user" value={user} onChange={handleInputChange}/>
            <button onClick={handleClick}>Add username</button>
            <p></p>
        </div>
    )
   
}