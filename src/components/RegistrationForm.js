import React, { useState } from "react";
import styled from "styled-components";

const RegistrationForm = ({ setRegistration }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <Holder>
      <InputHolder>
        <Input
          type="text"
          required
          value={email}
          onChange={(event) => setEmail(event.value)}
        />
        <InputTitle>Email</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="text"
          required
          value={username}
          onChange={(event) => setUsername(event.value)}
        />
        <InputTitle>username</InputTitle>
      </InputHolder>
      <InputHolder>
        <Input
          type="password"
          required
          value={password}
          onChange={(event) => SetPassword(event.value)}
        />
        <InputTitle>Password</InputTitle>
      </InputHolder>
      <ContinueButton>Continue</ContinueButton>
      <ResetButton onClick={() => setRegistration((prev) => !prev)}>
        Do you have an account already?
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
`;

const InputTitle = styled.text`
  color: ${(props) => props.theme.subFontColor};
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

export default RegistrationForm;
