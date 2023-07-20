import { compose, createStore } from "redux";
import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { watchSagas } from "./watchSagas";

// Declare types for redux devtools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reduxSagaMonitorsOptions = {};

const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorsOptions);

const middlewares = [sagaMiddleware];

const reducers = combineReducers(rootReducer);

const configureAppStore = () => {
  const store = createStore(
    reducers,
    {},
    //@ts-ignore
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        : (f: any) => f
    )
  );

  sagaMiddleware.run(watchSagas);

  return store;
};

const store = configureAppStore();

export default store;
