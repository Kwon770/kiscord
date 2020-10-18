import React, { useState } from "react";
import styled from "styled-components";
import { authService } from "../fbase";

const AuthForm = ({ setRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [isWrongPassword, SetIsWrongPassword] = useState(false);

  const [error, setError] = useState("");

  const validateEmail = () => {
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (email.trim() === "") {
      return false;
    } else if (!reg_email.test(email)) {
      return false;
    }

    return true;
  };

  const validateInput = () => {
    if (validateEmail() && password.trim() !== "") {
      setIsWrongEmail(false);
      SetIsWrongPassword(false);

      return true;
    } else {
      if (!validateEmail()) setIsWrongEmail(true);
      if (password.trim() === "") SetIsWrongPassword(true);

      return false;
    }
  };

  const login = async () => {
    setError("");
    if (!validateInput()) {
      setError("The information entered is invalid.");
      return;
    }

    try {
      let data = await authService.signInWithEmailAndPassword(email, password);
      console.log(data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <Holder>
      <InputHolder>
        <Input
          type="text"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          isWrong={isWrongEmail}
        />
        <InputTitle isWrong={isWrongEmail}>Email</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="password"
          value={password}
          onChange={(event) => SetPassword(event.target.value)}
          isWrong={isWrongPassword}
        />
        <InputTitle isWrong={isWrongPassword}>Password</InputTitle>
      </InputHolder>
      <FindingPwButton>Did you forget yout password? </FindingPwButton>
      <LoginButton onClick={() => login()}>Login</LoginButton>
      <RegisterHolder>
        <RegisterText>Do you need an account?</RegisterText>
        <RegisterButton onClick={() => setRegistration(true)}>
          Register
        </RegisterButton>
      </RegisterHolder>
      <ErrorText>{error}</ErrorText>
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

  border: 1px solid ${(props) =>
    props.isWrong ? props.theme.errorColor : "#000000"};
`;

const InputTitle = styled.text`
  color: ${(props) =>
    props.isWrong ? props.theme.errorColor : props.theme.subFontColor};
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
  position: relative;
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

const ErrorText = styled.div`
  position: absolute;
  top: 10;
  font-size: 15px;
  color: ${(props) => props.theme.errorColor};
  width: 415px;
  height: 30px;
  overflow: hidden;
  word-break: break-all;
`;
