import { combineReducers } from "redux";

import { ToDoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    todo: ToDoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;