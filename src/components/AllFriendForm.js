import React from "react";
import styled from "styled-components";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import theme from "Styles/theme";

const AllFriendForm = () => {
  return (
    <Holder>
      <Title>All Friend - 1</Title>
      <Friend>
        <InforHolder>
          <Picture picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg" />
          <Name>{"kwon"}</Name>
        </InforHolder>
        <MenuHolder>
          <Menu className="menu">
            <MdMessage color={theme.subFontColor} size={18} />
          </Menu>
          <Menu className="menu">
            <BsThreeDotsVertical color={theme.subFontColor} size={18} />
          </Menu>
        </MenuHolder>
      </Friend>
      <Friend>
        <InforHolder>
          <Picture picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg" />
          <Name>{"kwon"}</Name>
        </InforHolder>
        <MenuHolder>
          <Menu className="menu">
            <MdMessage color={theme.subFontColor} size={18} />
          </Menu>
          <Menu className="menu">
            <BsThreeDotsVertical color={theme.subFontColor} size={18} />
          </Menu>
        </MenuHolder>
      </Friend>
    </Holder>
  );
};

const Holder = styled.div`
  margin: 13px 30px;
`;

const Title = styled.div`
  margin-left: 10px;
  font-size: 15px;
  color: ${(props) => props.theme.subFontColor};
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const Friend = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  &:hover {
    background-color: ${(props) => props.theme.animColor};
  }

  &:hover .menu {
    background-color: ${(props) => props.theme.deepDarkBgColor};
  }
`;

const InforHolder = styled.div`
  display: flex;
  align-items: center;
`;

const MenuHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`;

const Menu = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 18pc;
  background-color: ${(props) => props.theme.deepBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  color: ${(props) => props.theme.subFontColor};
`;

export default AllFriendForm;
