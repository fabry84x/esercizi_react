import React from "react";

export class Welcome extends React.Component {
    render() {
        const {name} = this.props
        return <h1>{name}</h1>
    }
} 