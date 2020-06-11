import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  loggedIn: userReducer,
});

export default allReducers;
