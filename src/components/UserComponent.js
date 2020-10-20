import React from "react";
import styled from "styled-components";

const UserComponent = ({ picture, name, main }) => {
  return (
    <Holder>
      <Picture picture={picture} />
      <Name>{name}</Name>
    </Holder>
  );
};

const Holder = styled.div`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.animColor};
  }
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

export default UserComponent;
