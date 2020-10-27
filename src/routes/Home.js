import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import theme from "Styles/theme";
import ChanelBar from "components/ChanelBar";
import FriendBar from "components/FriendBar";
import AllFriendForm from "components/AllFriendForm";
import AddFriendForm from "components/AddFriendForm";

const Home = ({ userObj }) => {
  const [menu, setMenu] = useState(0);

  useEffect(() => {
    // console.log(userObj);
  }, []);

  const isClicked = (index) => {
    return index === menu ? true : false;
  };

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
          <Menu onClick={() => setMenu(0)} clicked={isClicked(0)}>
            All
          </Menu>
          <Menu AddFriend onClick={() => setMenu(1)} clicked={isClicked(1)}>
            Add Friend
          </Menu>
        </MainBar>
        <Form>{menu === 0 ? <AllFriendForm /> : <AddFriendForm />}</Form>
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
  padding: 4px 9px;
  border-radius: 5px;
  font-size: 15px;
  margin: 0px 15px;
  background-color: ${(props) =>
    props.AddFriend ? "#64B385" : props.clicked ? props.theme.animColor : ""};
  color: ${(props) =>
    props.AddFriend
      ? props.theme.mainFontColor
      : props.clicked
      ? props.theme.mainFontColor
      : props.theme.subFontColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.AddFriend ? "#64B385" : props.theme.animColor};
  }
`;

const Form = styled.div``;

export default Home;
