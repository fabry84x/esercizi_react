import { useState } from "react"

export function Login() {

    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event) {
        const { name, value, type, checked } = event.target

        setData(data => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onLogin () {
        console.log(data)
    }

    return (
        <div>
            <input onChange={handleInputChange} value={data.username} name="username" />
            <input onChange={handleInputChange} value={data.password} name="password" type="password" />
            <input onChange={handleInputChange} checked={data.remember} name="remember" type="checkbox" />
            <button onClick={onLogin} disabled={!data.username || !data.password}>Login</button>
        </div>
    )
}
















































/* import React from "react";

export class Login extends React.Component {

    state= {
        username:"",
        password:"",
        remember:false
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type==='checkbox'? checked : value
        })
    }

    onLogin = () => {
        console.log(this.state)
    }


    render() {
        return(
            <div>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/>
                <button onClick={this.onLogin} disabled={!this.state.username || !this.state.password}>Login</button>
            </div>
        )
    }
}  */