import styled from "styled-components/macro";

const SpinnerContainer = styled.div`
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  text-align: center;
`;

const RegForm = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  form {
    button {
      margin: 0 auto;
      padding: 10px;
      font-size: 17px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-style: normal;
      font-weight: 300;
      border-radius: 20px;
      box-shadow: none;
      border: 1px solid black;
    }
    text-align: center;
    margin: 0 auto;
    border-radius: 5px;
    width: 500px;
    height: auto;
    border: 1px solid black;
    padding: 20px;
    label {
      font-size: 17px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-style: normal;
      font-weight: 300;
    }
    input {
      width: 100%;
      margin: 10px auto;
      display: block;
      font-size: 17px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-style: normal;
      font-weight: 500;
      text-align: center;
    }
  }
`;
const Page404Form = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const HeaderContainer = styled.div`
  z-index: 5;
  display: flex;
  position: fixed;
  justify-content: space-around;
  width: 100%;
  background-color: #1d5b79;
  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    a {
      cursor: pointer;
      color: #fff;
      text-decoration: none;
      transition: 0.4s ease-in-out;
      &:hover {
        color: red;
      }
    }
  }
`;

const Container = styled.div`
  padding: 30px;
`;

const Profile_card = styled.div`
  width: calc(100% - 100px);
  margin-top: 30px;
  padding: 50px;
  border: 1px solid black;
  font-size: 20px;
  text-align: center;
  font-size: 25px;
`;

const Favourite_container = styled.div`
  display: flex;
  white-space: normal;
  height: 100%;
  color: black;
  padding: 20px 0;
`;

const Favourite_left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Favourite_right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-left: 1px solid black;
`;
const Film_item = styled(Favourite_left)`
  text-align: center;
  width: 300px;
  height: 350px;
  display: block;
  img {
    height: 150px;
    width: auto;
    object-fit: cover;
  }
  button {
    text-decoration: none;
    color: red;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
    font-size: 15px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    text-transform: uppercase;
  }
`;

export {
  Favourite_container,
  Favourite_right,
  Favourite_left,
  SpinnerContainer,
  Container,
  Wrapper,
  RegForm,
  HeaderContainer,
  Profile_card,
  Page404Form,
  Film_item,
};
