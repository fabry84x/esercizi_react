import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count:this.props.initialValue ?? 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) =>{
                return {
                    count:state.count + (this.props.incrementAmount ?? 1)
                }
            })
        }, this.props.incrementInterval ?? 1000)
    }

    render() {
        return <CounterDisplay count={this.state.count}/>
    } 
}