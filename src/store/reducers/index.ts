import { combineReducers } from "redux";
import { userRudecer } from "./useReducers";

export const rootReducer = combineReducers({
  user: userRudecer,
});
