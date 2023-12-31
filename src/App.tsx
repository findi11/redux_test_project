import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Registration from "./components/registaration/registration";
import Main from "./components/content/main";
import Header from "./components/header/header";
import { actions as appActions } from "./store/modules/app/slice";
// axios
import { $apiClient } from "./utils/apiClient";
import { useSelector, useDispatch } from "react-redux";

// hoc
import withErrorHandler from "./hoc/withErrorHandler";
import { selectIsAuthenticated } from "./store/modules/app/selector";
import { useEffect } from "react";
import Profile from "./components/content/profile";
import Page404 from "./components/specialPage/404";
import Favourite from "./components/content/favourite";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const onTryAutoLogin = () => dispatch(appActions.autoLoginTrigger());
  useEffect(() => {
    onTryAutoLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourite" element={<Favourite />}/>
        <Route path = '*'  element = {<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default withErrorHandler(App, $apiClient);
