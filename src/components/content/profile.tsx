import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Profile_card, Wrapper } from "../../utils/style";
import { selectMeData, selectMeLoading } from "../../store/modules/me/selector";
import { useDispatch, useSelector } from "react-redux";
import { actions as meActions } from "../../store/modules/me/slice";
import React, { useEffect } from "react";


function Profile() {
  const meInfo = useSelector(selectMeData);
  const meInfoLoading = useSelector(selectMeLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(meActions.fetchDataTrigger());
  }, []);
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
        </Wrapper>
      </Container>
    </>
  );
}

export default Profile;
