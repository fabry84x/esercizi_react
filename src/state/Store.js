import { legacy_createStore as createStore } from 'redux'
import { todosReducer } from "./TodosState";

export const store = createStore(todosReducer)



