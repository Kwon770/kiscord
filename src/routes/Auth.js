import React from "react";
import styled from "styled-components";
import AuthForm from "components/AuthForm";

const Auth = () => {
  return (
    <Holder>
      <AuthForm />
    </Holder>
  );
};

export default Auth;

const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
`;
