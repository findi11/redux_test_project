import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Registration from "./components/registaration/registration";
import Main from "./components/content/main";
import Header from "./components/header/header";
// axios
import { $apiClient } from './utils/apiClient';

// hoc
import withErrorHandler from './hoc/withErrorHandler';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withErrorHandler(App, $apiClient);
