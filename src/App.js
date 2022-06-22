import React from "react";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum"

export class App extends React.Component {
  render () {
      const numbersArr = [3,6,9,5,2,8]
      let sum = 0
      numbersArr.forEach(num =>{
        sum+=num
      })
      return (
        <div>
          <Welcome name='Cristina'/>
          <Sum numbers={sum}/>
        </div>  
      )  
  }
} 