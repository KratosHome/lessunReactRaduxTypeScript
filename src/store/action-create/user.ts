// пполученія запроса з серверу

import axios from "axios";
import { Dispatch } from "react";
import { UserAction, UserActionTypes } from "../../types/users";


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.FETCH_USERS}) // loding пока іде загрузка
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCES, payload: response.data}) // получені данні 
    } catch (e) {
        dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR,
            payload: "Якась помилка загрузки users"
        })
    }
  };
};
