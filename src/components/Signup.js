import React, { useState } from "react";
import UserPool from "../UserPool";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        setErrorMessage("Error! " + err); // need to have a string here for it will crash
      }
      console.log("Sign Up Response :", data);
      setSuccessMsg("Sign up was successful.")
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
        <button type="submit">Signup</button>
      </form>
      {errorMessage && (
        <div style={{ color: "red" }} className="error">
          {" "}
          {errorMessage}{" "}
        </div>
      )}
      {successMsg && <div style={{ color: "red" }}> {successMsg} </div>}
    </div>
  );
};

export default Signup;
