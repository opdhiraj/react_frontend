import React, { useState } from "react";

const SignUp = () => {
  let [name, setName] = useState("");
  let [passward, setPassward] = useState("");
  let [email, setEmail] = useState("");

  let collectData = () => {
    console.log("signup.js " + name, email, passward);
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputbox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputbox"
        type="passward"
        placeholder="Enter Passward"
        value={passward}
        onChange={(e) => setPassward(e.target.value)}
      />

      <button className="appButton" type="submit" onClick={collectData}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
