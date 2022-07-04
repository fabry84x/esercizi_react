import { legacy_createStore as createStore } from 'redux'
import { counterReducer } from "./CounterState";

export const store = createStore(counterReducer)



