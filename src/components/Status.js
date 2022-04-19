import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import Pool from "../UserPool";

const Status = () => {
  const [displayLogout, setDisplayLogout] = useState(true);
  const [logoutMsg, setlogoutMsg] = useState("");

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setDisplayLogout(true); // if logged display the log butto
    }).catch((err) => {
      console.log("Session: " + err)
    });
  }, []);

  const logout2 = () => {
    const user = Pool.getCurrentUser();
   

    console.log("Before Logout", user);

    if (user) {
      console.log("LOGOUT", user);
      user.signOut();
      setlogoutMsg("Logged out.")

    } else {
      console.log("No user signed in, log out was not performed.");
      setlogoutMsg("No user signed in, log out was not performed.");
    }
  };

  return (
    <div style={{ fontSize: "24px" }}>
      {displayLogout ? <button onClick={logout2}>Logout</button> : ""}
      <p style={{ color: "red" }} > {logoutMsg} </p>
    </div>
  );
};
export default Status;
