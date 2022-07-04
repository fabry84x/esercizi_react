import { decrementCounter, incrementCounter, resetCounter } from "./state/CounterState";
import {store} from "./state/Store"
import { addTodo,removeTodo,editTodo } from "./state/TodosState";

  store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(incrementCounter(7))
store.dispatch(addTodo({id:1,title:"Have breakfast",completed:true}))
store.dispatch(addTodo({id:2,title:"Go to work",completed:true}))
store.dispatch(removeTodo(2))
store.dispatch(decrementCounter(4))
store.dispatch(editTodo(1,{completed:false}))
store.dispatch(resetCounter())
