import { useState } from "react";
import { RegForm } from "../../utils/style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as signUpActions } from "../../store/modules/singUp/slice";
import { ActionTriggerProps } from "../../store/modules/singUp/types";
import React from "react";

interface Inputs {
  fullName: string;
  publicName: string;
  password: string;
  email: string;
}

function Registration() {
  const [inputs, setInputs] = useState<Inputs>({
    fullName: "",
    publicName: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUp = (payload: ActionTriggerProps) => {
    dispatch(signUpActions.fetchTrigger(payload));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUp({
      publicName: inputs.publicName,
      fullName: inputs.fullName,
      password: inputs.password,
      email: inputs.email,
    });
    // signUp();
  };

  return (
    <RegForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login_input">Введіть логін користувача</label>
        <input
          type="text"
          name="fullName"
          onChange={handleChange}
          className="login_input"
          placeholder="Enter your login"
        />

        <label htmlFor="public_name">Введіть нік користувача</label>
        <input
          type="text"
          name="publicName"
          onChange={handleChange}
          className="public_input"
          placeholder="Enter your public name"
        />
        <label htmlFor="email">Введіть email користувача</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="public_input"
          placeholder="Enter your email "
        />
        <label htmlFor="password_input">Введіть пароль користувача</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="password_input"
          placeholder="Enter your password"
        />
        <button type="submit">Зареєструватися</button>
      </form>
    </RegForm>
  );
}

export default Registration;
