import { useState } from "react";
import { RegForm } from "../../utils/style";
import { useNavigate } from "react-router-dom";

 
function Login() {
    const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const storedLogin = localStorage.getItem("Login");
    const storedPassword = localStorage.getItem("Password");
    if (
      storedLogin === JSON.stringify(loginData.login) &&
      storedPassword === JSON.stringify(loginData.password)
    ) {
      console.log("Login successful!");
      localStorage.setItem("Is login", 'login');
      navigate("/");
    } else {
      console.log("Login failed!");
    }
  };

  return (
    <RegForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login_input">Введіть логін користувача</label>
        <input
          type="text"
          name="login"
          onChange={handleChange}
          className="login_input"
          placeholder="Enter your login"
        />
        <label htmlFor="password_input">Введіть пароль користувача</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="password_input"
          placeholder="Enter your password"
        />
        <button type="submit">Авторизуватися</button>
      </form>
    </RegForm>
  );
}

export default Login;
