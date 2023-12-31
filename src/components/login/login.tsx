import { useState } from "react";
import { RegForm } from "../../utils/style";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as loginActions } from "../../store/modules/login/slice";
import { ActionTriggerProps } from "../../store/modules/login/types";
import { showSuccesSwal } from "../popup/succes_popup";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogin = (payload: ActionTriggerProps) =>
    dispatch(loginActions.fetchTrigger(payload));
  const [loginData, setLoginData] = useState({
    email: "",
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
    console.log("submit");
    onLogin({
      email: loginData.email,
      password: loginData.password,
    });
    showSuccesSwal({
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <RegForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login_input">Введіть логін користувача</label>
        <input
          type="text"
          name="email"
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
