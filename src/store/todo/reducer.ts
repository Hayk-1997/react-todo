import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
} from "./actionTypes";

import { TodoActions, TodoState } from "./types";

const initialState: TodoState = {
    pending: false,
    toDos: [],
    error: null,
};

export const ToDoReducer = (state = initialState, action: TodoActions) => {
    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return { ...state,pending: true };
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                toDos: action.payload.toDos,
                error: null,
            };
        case FETCH_TODO_FAILURE:
            return {
                ...state,
                pending: false,
                toDos: [],
                error: action.payload.error,
            };
        default:
            return { ...state };
    }
};