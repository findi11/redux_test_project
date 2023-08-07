import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";


// import { $apiClient } from 'utils/';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <App/>
      </PersistGate>
    </Provider>
  // </BrowserRouter>
);
