import { combineReducers } from "redux";
import { userRudecer } from "./useReducers";

export const rootReducer = combineReducers({
  user: userRudecer,
});

export type rootState = ReturnType<typeof rootReducer> // для того щоб бачило тип user