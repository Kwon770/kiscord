import React, { useState } from "react";
import styled from "styled-components";
import { authService } from "../fbase";

const RegistrationForm = ({ setRegistration }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");

  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptyUsername, setIsEmptyUsername] = useState(false);
  const [isEmptyPassword, SetIsEmptyPassword] = useState(false);

  const [error, setError] = useState("");

  const validateInput = () => {
    if (
      email.trim() !== "" &&
      username.trim() !== "" &&
      password.trim() !== ""
    ) {
      setIsEmptyEmail(false);
      setIsEmptyUsername(false);
      SetIsEmptyPassword(false);

      return true;
    } else {
      if (email.trim() === "") setIsEmptyEmail(true);
      if (username.trim() === "") setIsEmptyUsername(true);
      if (password.trim() === "") SetIsEmptyPassword(true);

      return false;
    }
  };

  const register = async () => {
    setError("");
    if (!validateInput()) {
      setError("Fill your information.");
      return;
    }

    try {
      let data = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      await authService.console.log(data);

      setRegistration(false);
    } catch (err) {
      console.log(err.message);
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
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          isEmpty={isEmptyEmail}
        />
        <InputTitle isEmpty={isEmptyEmail}>Email</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="text"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          isEmpty={isEmptyUsername}
        />
        <InputTitle isEmpty={isEmptyUsername}>username</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="password"
          required
          value={password}
          onChange={(event) => SetPassword(event.target.value)}
          isEmpty={isEmptyPassword}
        />
        <InputTitle isEmpty={isEmptyPassword}>Password</InputTitle>
      </InputHolder>
      <ContinueButton onClick={register}>Continue</ContinueButton>
      <ResetButton onClick={() => setRegistration(false)}>
        Do you have an account already?
      </ResetButton>
      <ErrorText>{error}</ErrorText>
    </Holder>
  );
};

const Holder = styled.div``;

const InputHolder = styled.div`
  position: relative;
  margin-top: 45px;
`;

const Input = styled.input`
  ${(props) => props.theme.AuthInput}

  border: 1px solid ${(props) =>
    props.isEmpty ? props.theme.errorColor : "#000000"}; ;
`;

const InputTitle = styled.text`
  color: ${(props) =>
    props.isEmpty ? props.theme.errorColor : props.theme.subFontColor};
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 0px;
`;

const ContinueButton = styled.div`
  ${(props) => props.theme.hlButton}

  margin-top: 25px;
`;

const ResetButton = styled.div`
  ${(props) => props.theme.hlText}

  margin-top: 10px;
`;

const ErrorText = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.errorColor};
  width: 415px;
  height: 30px;
  overflow: hidden;
  word-break: break-all;
`;

export default RegistrationForm;
