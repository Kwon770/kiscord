import React, { useEffect, useState } from "react";
import GlobalStyles from "Styles/GlobalStyles";
import AppRouter from "components/Router";
import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setIsLoggedIn(true);
        setUserObj({
          email: user.email === null ? "" : user.email,
          displayName: user.displayName === null ? "" : user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      email: user.email,
      displayName: user.displayName === null ? "" : user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {init ? (
          <AppRouter
            isLoggedIn={isLoggedIn}
            userObj={userObj}
            refreshUser={refreshUser}
          />
        ) : (
          <div>Initializing...</div>
        )}
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
