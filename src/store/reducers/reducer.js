import CounterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import {combineReducers} from "redux"


const reducer = combineReducers({todo:todoReducer,counter:CounterReducer});

export default reducer;

