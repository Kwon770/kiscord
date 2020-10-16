import React, { useState } from "react";
import GlobalStyles from "Styles/GlobalStyles";
import AppRouter from "components/Router";
import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";

function App() {
  const [init, setInit] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        {init ? <AppRouter /> : <div>Initializing...</div>}
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
