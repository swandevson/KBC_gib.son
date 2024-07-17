import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={(inputValue, setInputValue, name, setName)}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
