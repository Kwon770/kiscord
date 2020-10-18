import React, { useEffect } from "react";
import styled from "styled-components";

const Home = ({ userObj }) => {
  useEffect(() => {
    // console.log(userObj);
  }, []);

  return (
    <div>
      Home, {userObj && userObj.email}, {userObj && userObj.displayName}
    </div>
  );
};

export default Home;
