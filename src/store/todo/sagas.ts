import { all, call, put, takeLatest, SagaReturnType } from "redux-saga/effects";
import AxiosInstance from "../../config/axios";
import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";
import { ITodo } from "./types";

const getToDos = () => AxiosInstance.get<ITodo[]>('todos');

function* fetchTodoSaga() {
    try {
        const response: SagaReturnType<typeof getToDos> = yield call(getToDos);
        yield put(fetchTodoSuccess({ toDos: response.data }));
    } catch (e) {
        yield put(fetchTodoFailure({ error: e.message }));
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
    yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;