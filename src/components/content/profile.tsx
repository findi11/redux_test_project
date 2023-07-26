import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Profile_card, RegForm, Wrapper } from "../../utils/style";
import { selectMeData, selectMeLoading } from "../../store/modules/me/selector";
import { useDispatch, useSelector } from "react-redux";
import { actions as meActions } from "../../store/modules/me/slice";
import React, { useEffect, useState } from "react";
import { changePassPayload } from "../../store/modules/change_password/types";
import { actions as changePassActions } from "../../store/modules/change_password/slice";

function Profile() {
  const meInfo = useSelector(selectMeData);
  const meInfoLoading = useSelector(selectMeLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(meActions.fetchDataTrigger());
  }, []);
  const [changePassData, setchangePassData] = useState({
    password: "",
    password_confirmation: "",
  });

  function changePassword(payload: changePassPayload) {
    dispatch(changePassActions.fetchDataTrigger(payload));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setchangePassData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    changePassword({
      password: changePassData.password,
      password_confirmation: changePassData.password_confirmation,
    });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Profile_card>
            {meInfoLoading ? (
              <h1>Loading ...</h1>
            ) : (
              <>
                {meInfo ? (
                  <>
                    <p>{meInfo.fullName}</p> <p>{meInfo.publicName}</p>
                    <p>{meInfo.email}</p>
                  </>
                ) : (
                  <h1>Відсутні данні по користувачу</h1>
                )}
              </>
            )}
          </Profile_card>
          <RegForm>
            <form onSubmit={handleSubmit}>
              <h3>Зміна паролю користувача</h3>
              <input
                type="text"
                name="password"
                onChange={handleChange}
                className="password_input"
                placeholder="Enter your new password"
              ></input>
              <input
                type="text"
                name="password_confirmation"
                onChange={handleChange}
                className="password_confirmation"
                placeholder="Confirm your new password"
              ></input>
              <button type="submit">Підтвердити зміну</button>
            </form>
          </RegForm>
        </Wrapper>
      </Container>
    </>
  );
}

export default Profile;
