import React from "react";
import User from "../components/User";
import { Route, Switch } from "react-router";
import UserDetail from "../components/UserDetail";
const AuthRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={UserDetail} />
        <Route exact path="/home" component={UserDetail} />

        <Route path="/user" component={UserDetail} />
      </Switch>
    </>
  );
};
export default AuthRoutes;
