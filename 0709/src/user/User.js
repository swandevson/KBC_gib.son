import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Input = () => {
  const { inputValue, setInputValue } = useContext(UserContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleInputChange} />;
};

const Submit = () => {
  return <button>submit</button>;
};

const Reset = () => {
  const { setName, setInputValue } = useContext(UserContext);

  const handleReset = () => {
    setName("");
    setInputValue("");
  };

  return (
    <button type="button" onClick={handleReset}>
      reset
    </button>
  );
};

const Form = () => {
  const { setName, inputValue, setInputValue } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input />
      <Submit />
      <Reset />
    </form>
  );
};

const User = () => {
  const { name } = useContext(UserContext);

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
      <Form />
    </div>
  );
};

export default User;
