import React, { useEffect } from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import theme from "Styles/theme";
import ChanelBar from "components/ChanelBar";
import PmBar from "components/PmBar";
import FriendList from "components/FriendList";

const Home = ({ userObj }) => {
  useEffect(() => {
    // console.log(userObj);
  }, []);

  return (
    <Holder>
      <ChanelBar />
      <PmBar />
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
          <FriendList />
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

export default Home;
