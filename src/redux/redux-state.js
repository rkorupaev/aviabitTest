import {combineReducers, createStore} from "redux";
import flightListReducer from "./flightListReducer";

let reducers = combineReducers({
    flightList: flightListReducer,
});

let store = createStore(reducers);

export default store;
