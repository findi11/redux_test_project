import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer } from "../../utils/style";
import { useState, useEffect } from "react";

function Header() {
  // const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("Is login") !== null);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("Is login") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("Is login");
    setIsLoggedIn(false);

  }

  return (
    <HeaderContainer>
      <nav>
        <Link to="/">HOME</Link>
        {localStorage.getItem("Login") ? (
          isLoggedIn ? (
            <a onClick={logout}>LOGOUT</a>
          ) : (
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
