import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    event.target.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput("");
    setName(input);
  };

  const renderGreeting = () => {
    if (name === "") {
      return <h1>What's your name?</h1>;
    } else {
      return <h1>Hi, {name}</h1>;
    }
  };

  const handleReset = () => {
    setInput(null);
    setName(null);
  };

  return (
    <div>
      {renderGreeting()}
      <form>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
};

export default User;
