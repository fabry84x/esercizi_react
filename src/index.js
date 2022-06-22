import  ReactDOM  from "react-dom";
import { ClickCounter } from "./ClickCounter";

ReactDOM.render(
  <ClickCounter initialValue={7}/>,
  document.getElementById('root')
);   