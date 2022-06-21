import  ReactDOM  from "react-dom";
import {TodoList} from "./TodoList"

ReactDOM.render(
  <TodoList 
    render={
      (items,removeItem) => {
        items = items.map((listItem,index)=><li key={index}>{listItem}<button onClick={()=>removeItem(index)}>Delete</button></li>)
        return (
          <ul>{items}</ul>
        )
      }
    }
  />,
  document.getElementById('root')
);    