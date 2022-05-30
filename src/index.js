import React from "react";
import ReactDOM from "react-dom";


function greeting(name){
    let hello = <h1>Hello, {name}</h1>;
    return hello;
}

ReactDOM.render(
    greeting('Mario'),
    document.getElementById('root')
);