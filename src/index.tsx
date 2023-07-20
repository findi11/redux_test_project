import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/registaration/registration";
import Header from "./components/header/header";
import Login from "./components/login/login";
// import { $apiClient } from 'utils/';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <BrowserRouter>

    <Provider store={store}>
       
        <App/>
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </Provider>
  // </BrowserRouter>
);
