import React from "react";

export class Counter extends React.Component {
    state = {
        count:this.props.initialValue ?? 0
    }
    constructor(props) {
        super(props);

        setInterval(() => {
            this.setState((state) =>{
                return {
                    count:state.count + (this.props.incrementAmount ?? 1)
                }
            })
        }, this.props.incrementInterval ?? 1000)
    }
     

    render() {
        return <h1>Count: {this.state.count}</h1>
    } 
}