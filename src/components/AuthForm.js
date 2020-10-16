import React from "react";
import styled from "styled-components";

const AuthForm = () => {
  return (
    <Holder>
      <InputHolder>
        <Input />
        <InputTitle>Email</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input />
        <InputTitle>Password</InputTitle>
      </InputHolder>
      <FindingPwButton>Did you forget yout password? </FindingPwButton>
      <LoginButton>Login</LoginButton>
      <RegisterHolder>
        <RegisterText>Do you need an account?</RegisterText>
        <RegisterButton>Register</RegisterButton>
      </RegisterHolder>
    </Holder>
  );
};

export default AuthForm;

const Holder = styled.div``;

const InputHolder = styled.div`
  position: relative;
  margin-top: 45px;
`;

const Input = styled.input`
  width: 415px;
  height: 40px;
  position: relative;
  border-radius: 5px;
  background-color: ${(props) => props.theme.deepBgColor};
  border: 1px solid black;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.hlColor};
  }
`;

const InputTitle = styled.text`
  color: ${(props) => props.theme.subFontColor};
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 0px;
`;

const FindingPwButton = styled.div`
  color: ${(props) => props.theme.hlColor};
  font-size: 15px;
  margin-top: 7px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.div`
  width: 415px;
  height: 45px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.hlColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.mainFontColor};
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hl2Color};
  }
`;

const RegisterHolder = styled.div`
  margin-top: 10px;
  display: flex;
`;

const RegisterText = styled.text`
  font-size: 13px;
  color: ${(props) => props.theme.subFontColor};
  margin-right: 5px;
`;

const RegisterButton = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.hlColor};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
