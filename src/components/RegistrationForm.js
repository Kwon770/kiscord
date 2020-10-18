import React, { useState } from "react";
import styled from "styled-components";
import { authService } from "../fbase";

const RegistrationForm = ({ setRegistration }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");

  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [isWrongUsername, setIsWrongUsername] = useState(false);
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
    if (validateEmail() && username.trim() !== "" && password.trim() !== "") {
      setIsWrongEmail(false);
      setIsWrongUsername(false);
      SetIsWrongPassword(false);

      return true;
    } else {
      if (!validateEmail()) setIsWrongEmail(true);
      if (username.trim() === "") setIsWrongUsername(true);
      if (password.trim() === "") SetIsWrongPassword(true);

      return false;
    }
  };

  const register = async () => {
    setError("");
    if (!validateInput()) {
      setError("The information entered is invalid.");
      return;
    }

    try {
      let data = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(data);

      setRegistration(false);
    } catch (err) {
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
          isWrong={isWrongEmail}
        />
        <InputTitle isWrong={isWrongEmail}>Email</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="text"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          isWrong={isWrongUsername}
        />
        <InputTitle isWrong={isWrongUsername}>username</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="password"
          required
          value={password}
          onChange={(event) => SetPassword(event.target.value)}
          isWrong={isWrongPassword}
        />
        <InputTitle isWrong={isWrongPassword}>Password</InputTitle>
      </InputHolder>
      <ContinueButton onClick={register}>Continue</ContinueButton>
      <ResetButton onClick={() => setRegistration(false)}>
        Do you have an account already?
        <ErrorText>{error}</ErrorText>
      </ResetButton>
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

const ContinueButton = styled.div`
  ${(props) => props.theme.hlButton}

  margin-top: 25px;
`;

const ResetButton = styled.div`
  ${(props) => props.theme.hlText}

  margin-top: 10px;
  position: relative;
`;

const ErrorText = styled.div`
  position: absolute;
  font-size: 15px;
  color: ${(props) => props.theme.errorColor};
  width: 415px;
  height: 50px;
  overflow: hidden;
  word-break: break-all;
`;

export default RegistrationForm;
