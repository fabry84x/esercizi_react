import React from "react";

export class Login extends React.Component {

    state = {
        username: "",
        password: "",
        remember: false
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    onLogin = () => {
        console.log(this.state)
    }

    render() {
        const ButtonStyle = {
            backgroundColor:(this.state.password.length<8) ?'red':'green'
        }
        return (
            <div>
                <input name="username" value={this.state.username} onChange={this.handleInputChange} />
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                <button style={ButtonStyle} onClick={this.onLogin} disabled={!this.state.username || !this.state.password}>Login</button>
            </div>
        )
    }
} 