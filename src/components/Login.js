import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import Pool from "../UserPool";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState("");
  const [test, setTest] = React.useState("");

  const { authenticate } = useContext(AccountContext);
  const { getSession } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        console.log("Email: ", data.idToken.payload.email);
        console.log("UUID: ", data.idToken.payload.sub);
        setLoggedIn();
      })
      .catch((err) => {
        console.error("Failed to login", err);
        setErrorMessage("Error! " + err); // need to have a string here for it will crash
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit"> Login </button>

        <h3> {test} </h3>

        {errorMessage && (
          <div style={{ color: "red" }} className="error">
            {" "}
            {errorMessage}{" "}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
