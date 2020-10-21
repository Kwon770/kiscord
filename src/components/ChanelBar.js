import React from "react";
import styled from "styled-components";

const ChanelBar = () => {
  return (
    <SideBar>
      <Chanel picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg">
        <OverlayTitle className="overlay">Home</OverlayTitle>
      </Chanel>
      <Border />
      <Chanel picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg">
        <OverlayTitle className="overlay">Home</OverlayTitle>
      </Chanel>
    </SideBar>
  );
};

const SideBar = styled.div`
  width: 110px;
  height: 100vh;
  background-color: ${(props) => props.theme.deepDarkBgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Chanel = styled.div`
  position: relative;
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    border-radius: 18px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const OverlayTitle = styled.div`
  z-index: 10;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 55px;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Border = styled.div`
  width: 30px;
  height: 1px;
  background-color: ${(props) => props.theme.borderColor};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export default ChanelBar;
