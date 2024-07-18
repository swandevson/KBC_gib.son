import "./App.css";
import User from "./user/User";
import Clock from "./clock/Clock";
import { UserProvider } from "./user/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <User />
      </UserProvider>
      <Clock />
    </>
  );
};

export default App;
