import { combineReducers } from "redux";
import { userRudecer } from "./useReducers";
import { todoReducer } from './todoReducers';

export const rootReducer = combineReducers({
  user: userRudecer,
  todo: todoReducer
});

export type rootState = ReturnType<typeof rootReducer> // для того щоб бачило тип user