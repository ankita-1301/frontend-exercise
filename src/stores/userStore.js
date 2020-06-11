import allReducers from "../reducers/index";
import { createStore } from "redux";

const userStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default userStore;
