import React from "react";
import styled from "styled-components";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import theme from "Styles/theme";
import UserComponent from "components/UserComponent";
import MyBar from "components/MyBar";

const FriendBar = () => {
  return (
    <Bar>
      <Menu>
        <FaUserAlt
          color={theme.subFontColor}
          size={17}
          style={{ marginLeft: 15 }}
        />
        <BarTitleText>Friend</BarTitleText>
      </Menu>

      {/*  */}
      <PmTitleHolder>
        <PmTitle>Personal Message</PmTitle>
        <FaPlus color={theme.subFontColor} />
      </PmTitleHolder>
      {/* Dynamic Personal Message */}
      <UserComponent
        name="kwon"
        picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"
      />
      <UserComponent
        name="kwon"
        picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"
      />
      <MyBar />
    </Bar>
  );
};

const Bar = styled.div`
  position: relative;
  width: 380px;
  height: 100vh;
  background-color: ${(props) => props.theme.deepBgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu = styled.div`
  width: 90%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;

  &:hover {
    background-color: ${(props) => props.theme.animColor};
  }
`;

const PmTitleHolder = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const PmTitle = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.subFontColor};
`;

const BarTitleText = styled.div`
  ${(props) => props.theme.BarTitleText};
`;

export default FriendBar;
