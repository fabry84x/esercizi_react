import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _usernameRef = createRef()

    handleFormSubmit =(event) => {
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({username,password,remember})
    }

    componentDidMount=()=>{
        this._usernameRef.current.focus()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input ref={this._usernameRef} name="username"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}