import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => (
  <Router>
    <Switch>
      {isLoggedIn ? (
        <>
          <Route exact path="/">
            <Home userObj={userObj} />
          </Route>
          <Redirect from="*" to="/" />
        </>
      ) : (
        <>
          <Route exact path="/">
            <Auth />
          </Route>
          <Redirect from="*" to="/" />
        </>
      )}
    </Switch>
  </Router>
);

export default AppRouter;
