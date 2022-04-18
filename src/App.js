import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";

const App = () => {
  return (
    <Account>
      <Signup />
      <Login />
      <Status />
    </Account>
  );
};

export default App;
