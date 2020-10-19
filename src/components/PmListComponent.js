import React from "react";
import styled from "styled-components";

const PmListComponent = ({ picture, name, main }) => {
  return (
    <Holder>
      <Profile picture={picture} />
      <Name main={main}>{name}</Name>
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

const Profile = styled.div`
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
  color: ${(props) =>
    props.main ? props.theme.mainFontColor : props.theme.subFontColor};
`;

export default PmListComponent;
