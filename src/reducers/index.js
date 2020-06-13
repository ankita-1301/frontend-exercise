import userReducer from "./userReducer";
import recipeReducer from "./recipeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  loggedIn: userReducer,
  recipeData: recipeReducer,
});

export default allReducers;
