import React from "react";
import styled from "styled-components";
import AuthForm from "components/AuthForm";
import { FaDiscord } from "react-icons/fa";
import wallpaper from "asset/AuthWallpaper.jpg";

const Auth = () => {
  return (
    <Holder>
      <LogoHolder>
        <FaDiscord style={{ width: 34, height: 37, color: "white" }} />
        <LogoTitle>KISCORD</LogoTitle>
      </LogoHolder>
      <Panel>
        <BigGreeting>Welcome back!</BigGreeting>
        <SmallGreeting>It's so nice to see you again!</SmallGreeting>
        <AuthForm />
      </Panel>
    </Holder>
  );
};

export default Auth;

const Holder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${wallpaper});
`;

const LogoHolder = styled.div`
  position: absolute;
  top: 23px;
  left: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTitle = styled.text`
  color: ${(props) => props.theme.mainFontColor};
  font-size: 22px;
  font-weight: 700;
  margin-left: 4px;
`;

const Panel = styled.div`
  width: 480px;
  height: 420px;
  background-color: #36393e;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigGreeting = styled.text`
  color: ${(props) => props.theme.mainFontColor};
  font-size: 25px;
  margin-top: 35px;
`;

const SmallGreeting = styled.text`
  color: ${(props) => props.theme.subFontColor};
  font-size: 17px;
  margin-top: 10px;
`;
