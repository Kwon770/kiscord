import React, { useEffect } from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import theme from "Styles/theme";
import ChanelBar from "components/ChanelBar";
import FriendBar from "components/FriendBar";
import PmListComponent from "components/PmListComponent";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Home = ({ userObj }) => {
  useEffect(() => {
    // console.log(userObj);
  }, []);

  return (
    <Holder>
      <ChanelBar />
      <FriendBar />
      <Main>
        <MainBar>
          <BarTitle>
            <FaUserAlt color={theme.subFontColor} size={17} />
            <BarTitleText>Friend</BarTitleText>
          </BarTitle>
          <Menu>All</Menu>
          <Menu AddFriend>Add Friend</Menu>
        </MainBar>
        <Content>
          <Title>All Friend - 1</Title>
          <FriendHolder>
            <PmListComponent
              main="main"
              name="kwon"
              picture="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"
            />
            <FriendMenuHolder>
              <FriendMenu>
                <MdMessage color={theme.subFontColor} size={18} />
              </FriendMenu>
              <FriendMenu>
                <BsThreeDotsVertical color={theme.subFontColor} size={18} />
              </FriendMenu>
            </FriendMenuHolder>
          </FriendHolder>
        </Content>
      </Main>
    </Holder>
  );
};

const Holder = styled.div`
  display: flex;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.lightBgColor};
`;

const MainBar = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #2c2d31;
  display: flex;
  align-items: center;
`;

const BarTitle = styled.div`
  ${(props) => props.theme.BarTitle};
`;

const BarTitleText = styled.div`
  ${(props) => props.theme.BarTitleText};
`;

const Menu = styled.div`
  padding: 3px 7px;
  border-radius: 5px;
  font-size: 15px;
  margin: 0px 15px;
  background-color: ${(props) => (props.AddFriend ? "#64B385" : "")};
  color: ${(props) =>
    props.AddFriend ? props.theme.mainFontColor : props.theme.subFontColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.AddFriend ? "#64B385" : props.theme.animColor};
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  margin-left: 10px;
  font-size: 15px;
  color: ${(props) => props.theme.subFontColor};
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const FriendHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FriendMenuHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`;

const FriendMenu = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 18pc;
  background-color: ${(props) => props.theme.deepdarkBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Home;
