import { combineReducers, createStore, applyMiddleware } from "redux";
import entities from "./reducers/entities";
import thunkMiddleware from "redux-thunk";

export default createStore(
  combineReducers({ entities }),
  applyMiddleware(thunkMiddleware)
);
