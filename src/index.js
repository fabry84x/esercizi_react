import React from "react";
import ReactDOM from "react-dom";


function add(a,b){
    let sum = <h2>{a + b}</h2>;
    return sum;
}

ReactDOM.render(
    add(3,4),
    document.getElementById('root')
);