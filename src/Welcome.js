import React from "react";
import { Link } from "react-router-dom";

export function Welcome(props) {

    return (
        <div>
            <h1>Welcome, {props.name}</h1>
            <Link to="/">Welcome |</Link>
            <Link to="/counter">Counter |</Link>
            <Link to="/users">GithubUserList</Link>
        </div>
    )
}  