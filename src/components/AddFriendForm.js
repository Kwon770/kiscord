import React from "react";
import styled from "styled-components";
import { dbService, authService } from "fbase";

const AddFriendForm = () => {
  const sendFriendRequest = async () => {
    const newFriendRequest = {
      fromUser: authService.currentUser.uid,
      // toUser:
    };

    await dbService.collection("friendRequests").add;
  };

  return (
    <Holder>
      <InputForm>
        <Title>Add Friend</Title>
        <State>You can add friends using email!</State>
        <InputHolder>
          <Input placeholder="Input user's email" />
          <SendButton>Send friend requests</SendButton>
        </InputHolder>
      </InputForm>
      <Humor></Humor>
    </Holder>
  );
};

const Holder = styled.div``;

const InputForm = styled.div`
  padding: 13px 30px;
  border-bottom: 1px solid ${(props) => props.theme.darkBgColor};
  padding-bottom: 23px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.mainFontColor};
  margin-bottom: 15px;
`;

const State = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.subFontColor};
  margin-bottom: 17px;
`;

const InputHolder = styled.div`
  position: relative;
`;

const Input = styled.input`
  position: relative;
  width: 95%;
  max-width: 890px;
  height: 50px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.deepBgColor};
  border: 1px solid #232428;
  font-size: 14px;
  font-weight: 300;
  color: white;
  padding: 0px 10px;

  ::placeholder {
    color: ${(props) => props.theme.hiddenFontColor};
    font-size: 17px;
  }
`;

const SendButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 160px;
  height: 30px;
  border-radius: 3px;
  background-color: #535e86;
  color: #848794;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* &:hover {
    background-color: ${(props) => props.theme.hlColor};
    color: ${(props) => props.theme.mainFontColor};
  } */
`;

const Humor = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.subFontColor};
`;

export default AddFriendForm;
