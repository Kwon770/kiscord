import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "../routes/Auth";

// isLoggedIn
const AppRouter = () => (
  <Router>
    <Switch>
      <>
        <Route exact path="/">
          <Auth />
        </Route>
        <Redirect from="*" to="/" />
      </>
    </Switch>
  </Router>
);

export default AppRouter;
