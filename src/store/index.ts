import { compose, createStore } from "redux";
import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { watchSagas } from "./watchSagas";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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


const persistConfig = {
  key: 'root', // ключ для збереження даних
  storage: storage, // тип зберігання (локальне сховище, сеансове сховище тощо)
};

const persistedReducer = persistReducer(persistConfig, reducers);


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
export const persistor = persistStore(store);

export default store;
