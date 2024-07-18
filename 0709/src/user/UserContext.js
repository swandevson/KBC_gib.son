import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const nameInLocalStorage = localStorage.getItem("name");
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState(
    nameInLocalStorage ? nameInLocalStorage : ""
  );

  return (
    <UserContext.Provider value={{ inputValue, setInputValue, name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
