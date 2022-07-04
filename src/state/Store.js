import { combineReducers, legacy_createStore as createStore } from 'redux'
import { todosReducer } from "./TodosState";
import { counterReducer } from "./CounterState"

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})

export const store = createStore(rootReducer)



