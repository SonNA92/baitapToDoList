// setup Redux

import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import {ToDoListReducer} from "./Reducer/ToDoListReducer";




const rootReducer = combineReducers({
    //  chua state cua ung dung
    ToDoListReducer

}) 

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));