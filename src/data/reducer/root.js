import { combineReducers } from "redux";
import { addProjectReducer } from "./addProjectReducer";

export const rootReducer = combineReducers({
  addProjectReducer,
});
