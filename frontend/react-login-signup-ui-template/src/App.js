import React from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";
import User from "./components/User";
import Home from "./components/Home";
import AuthRoutes from "./routes/AuthRoutes";
import UnauthRoutes from "./routes/UnauthRoutes";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              Welcome to My New Project UserManagement
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/user"}>
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {isLogin ? <AuthRoutes /> : <UnauthRoutes />}
      </div>
    </Router>
  );
}

export default App;
