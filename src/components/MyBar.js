import React from "react";
import styled from "styled-components";
import { FaCog } from "react-icons/fa";
import theme from "Styles/theme";

const MyBar = () => {
  return (
    <Holder>
      <ProfileHolder>
        <Picture picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg" />
        <Name>kwonmain</Name>
      </ProfileHolder>

      <FaCog
        color={theme.subFontColor}
        size={18}
        style={{ marginRight: 25, cursor: "pointer" }}
      />
    </Holder>
  );
};

const Holder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.darkBgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Picture = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  height: 35px;
  width: 35px;
  border-radius: 25px;
  margin-left: 10px;
  margin-right: 13px;
`;

const Name = styled.div`
  font-size: 17px;
  color: ${(props) => props.theme.mainFontColor};
`;

export default MyBar;
