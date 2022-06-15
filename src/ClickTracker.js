import React from "react";

export class ClickTracker extends React.Component {

    state={button:""}

    trackButtonClick = (event) => {
        this.setState((state)=>{
            return{
                button:event.target.name
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Last Button Pressed: {this.state.button}</h1>
                <button name="Button1" onClick={this.trackButtonClick}>Button1</button>
                <button name="Button2" onClick={this.trackButtonClick}>Button2</button>
                <button name="Button3" onClick={this.trackButtonClick}>Button3</button>
            </div>
        )
    }
} 