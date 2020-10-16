import React, { useState } from "react";
import GlobalStyles from "components/GlobalStyles";
import AppRouter from "components/Router";

function App() {
  const [init, setInit] = useState(true);

  return (
    <>
      {init ? <AppRouter /> : <div>Initializing...</div>}
      <GlobalStyles />
    </>
  );
}

export default App;
