import "./App.css";
import User from "./User.js";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <User />
      </UserProvider>
    </>
  );
};

export default App;
