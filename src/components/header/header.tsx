import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer } from "../../utils/style";
import { useState, useEffect } from "react";
import { selectMeData } from "../../store/modules/me/selector";
import { useDispatch, useSelector } from "react-redux";
import { selectLogout } from "../../store/modules/logout/selectors";
import { actions as logoutActions } from '../../store/modules/logout/slice';
import { showConfirmSwal } from "../popup/confirm_popup";


function Header() {
  // const location = useLocation();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("Is login") !== null
  );
  const logout = useSelector(selectLogout);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("Is login") !== null);
  }, []);

  function logoutMe(){
    showConfirmSwal();
    dispatch(
      logoutActions.fetchTrigger()
    
    );
  }


  return (
    <HeaderContainer>
      <nav>
        <Link to="/">HOME</Link>
        {localStorage.getItem("access_token") ? (
          localStorage.getItem('is login') ? (
            <>
            <button onClick={logoutMe}>LOGOUT</button>
            <Link  to="/profile">PROFILE</Link>
            </>
          ): (
            <Link to="/login">LOGIN</Link>
          )
        ) : (
          <Link to="/reg">REGISTRATION</Link>
        )}
      </nav>
    </HeaderContainer>
  );
}

export default Header;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

