import React, { useState } from "react";
import styled from "styled-components";
import AuthForm from "components/AuthForm";
import { FaDiscord } from "react-icons/fa";
import wallpaper from "asset/AuthWallpaper.jpg";
import Wave from "react-wavify";
import RegistrationForm from "components/RegistrationForm";

const Auth = () => {
  const [registration, setRegistration] = useState(false);

  return (
    <Holder>
      <WaveHolder>
        <Wave fill="#2F3136" options={{ amplitude: 50, points: 4 }} />
      </WaveHolder>
      <WaveBackground />
      <LogoHolder>
        <FaDiscord style={{ width: 34, height: 37, color: "white" }} />
        <LogoTitle>KISCORD</LogoTitle>
      </LogoHolder>
      <Panel>
        {registration ? (
          <>
            <BigGreeting>Creating an account</BigGreeting>
            <RegistrationForm setRegistration={setRegistration} />
          </>
        ) : (
          <>
            <BigGreeting>Welcome back!</BigGreeting>
            <SmallGreeting>It's so nice to see you again!</SmallGreeting>
            <AuthForm setRegistration={setRegistration} />
          </>
        )}
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

const LogoTitle = styled.div`
  color: ${(props) => props.theme.mainFontColor};
  font-size: 22px;
  font-weight: 700;
  margin-left: 4px;
`;

const WaveHolder = styled.div`
  position: absolute;
  top: 70px;
  left: -300px;
  padding-bottom: 100px;
  width: 1200px;
  height: 300px;
  border-top-right-radius: 150px;
  border-top-left-radius: 150px;
  transform: rotate(135deg);
`;

const WaveBackground = styled.div`
  position: absolute;
  top: -500px;
  left: -200px;
  width: 700px;
  height: 1200px;
  background-color: #2f3136;
  transform: rotate(45deg);
`;

const Panel = styled.div`
  z-index: 10;
  padding: 38px 33px;
  background-color: #36393e;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigGreeting = styled.div`
  color: ${(props) => props.theme.mainFontColor};
  font-size: 25px;
`;

const SmallGreeting = styled.div`
  color: ${(props) => props.theme.subFontColor};
  font-size: 17px;
  margin-top: 10px;
`;
