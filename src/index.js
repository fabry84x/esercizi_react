import  ReactDOM  from "react-dom";
import { Counter } from "./Counter";

ReactDOM.render(
    <Counter initialValue={100} incrementAmount={50} incrementInterval={2000} />,
    document.getElementById('root')
); 