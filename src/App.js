import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInput = (e) => {
    setEmail(
      e.target.value
        .replaceAll("com", "az")
        .replaceAll("ru", "az")
        .replaceAll("net", "az")
    );
    console.log(".az olmali");
  };
  const setPswrd = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      console.log("8 den chox olmali");
    }
  };
  return (
    <div>
      <input
        className="first_input"
        type="email"
        onInput={onInput}
        value={email}
        placeholder=".az ile bitmeli"
      />
      <input
        className="second_input"
        type="password"
        placeholder="8-den cox"
        value={password}
        onInput={setPswrd}
      />
    </div>
  );
};

export default App;
