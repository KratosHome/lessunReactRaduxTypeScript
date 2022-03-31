// пполученія запроса з серверу

import axios from "axios";
import { Dispatch } from "react";
import { TodoActionTypes, TotoAcrion } from "../../types/todo";


export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TotoAcrion>) => {
    try {
        dispatch({type: TodoActionTypes.FETCH_TODOS}) // loding пока іде загрузка
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {_page: page, _limit: limit}
        })
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data}) // получені данні 
    } catch (e) {
        dispatch({
            type: TodoActionTypes.FETCH_TODOS_ERROR,
            payload: "Якась помилка загрузки users"
        })
    }
  };
};

export function setTodoPage(page:number): TotoAcrion{
    return{type: TodoActionTypes.FETCH_TODOS_PAGE, payload: page}
}