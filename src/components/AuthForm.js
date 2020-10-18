import React, { useState } from "react";
import styled from "styled-components";

const AuthForm = ({ setRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  return (
    // ** Check whether required property work or not **
    <Holder>
      <InputHolder>
        <Input
          type="text"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputTitle>Email</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="password"
          value={password}
          onChange={(event) => SetPassword(event.target.value)}
        />
        <InputTitle>Password</InputTitle>
      </InputHolder>
      <FindingPwButton>Did you forget yout password? </FindingPwButton>
      <LoginButton>Login</LoginButton>
      <RegisterHolder>
        <RegisterText>Do you need an account?</RegisterText>
        <RegisterButton onClick={() => setRegistration(true)}>
          Register
        </RegisterButton>
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
  ${(props) => props.theme.AuthInput}
`;

const InputTitle = styled.text`
  color: ${(props) => props.theme.subFontColor};
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 0px;
`;

const FindingPwButton = styled.div`
  ${(props) => props.theme.hlText}

  margin-top: 7px;
`;

const LoginButton = styled.div`
  ${(props) => props.theme.hlButton}
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
