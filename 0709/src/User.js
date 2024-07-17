import React, { useState, useEffect } from "react";

const Input = ({ input, onInput }) => {
  return <input type="text" value={input} onChange={onInput} />;
};

const Submit = () => <button type="submit">submit</button>;

const Reset = ({ onReset }) => {
  return (
    <button type="button" onClick={onReset}>
      reset
    </button>
  );
};

const Form = ({ input, onInput, onSubmit, onReset }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input input={input} onInput={onInput} />
      <Submit />
      <Reset onReset={onReset} />
    </form>
  );
};

const User = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Component mounted or page reloaded");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(input);
    setInput("");
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleReset = () => {
    setInput("");
    setName("");
  };

  const renderGreeting = () => {
    if (name === "") {
      return <h1>What's your name?</h1>;
    } else {
      return <h1>Hi, {name}</h1>;
    }
  };

  return (
    <div>
      {renderGreeting()}
      <Form
        input={input}
        onInput={handleInput}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </div>
  );
};

export default User;
