import React from "react";

export class TodoList extends React.Component {

    state={
        items:["item1","item2","item3"],
        inputItem:""
    }

    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            inputItem:value
        })
    }

    handleListItem = () => {
        const list = this.state.items
        list.push(this.state.inputItem)
        this.setState({
            list,
            inputItem:""
        })
    }

    handleResetState = () => {
        this.setState({
            items:[]
        })
    }

    removeItem = (i) => {
        const newList = this.state.items.splice(i,1)
        this.setState({
            newList
        })
    }

    render() {
        const listItems = this.state.items.map((listItem,index)=><li key={index}>{listItem}<button onClick={() => this.removeItem(index) }>Delete</button></li>)
        return(
            <div>
                <ul>{listItems}</ul>
                <input name="inputItem" value={this.state.inputItem} onChange={this.handleInputChange}/>
                <button onClick={this.handleListItem}>Add item</button>
                <button onClick={this.handleResetState}>Reset</button>
                
            </div>
        )
    }
}