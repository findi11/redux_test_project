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
  display: block;
  width: 100%;
  position: absolute;
  margin: 40% auto;
  form {
    button{
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
    label{
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
const HeaderContainer = styled.div`
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

export { SpinnerContainer, Container, Wrapper, RegForm, HeaderContainer };
