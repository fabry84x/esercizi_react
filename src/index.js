import {store} from "./state/Store"
import { incrementCounter } from "./state/CounterState";

  store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCounter(7))
store.dispatch(incrementCounter(3))