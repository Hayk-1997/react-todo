import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;