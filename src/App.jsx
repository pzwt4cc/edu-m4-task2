import UserList from "./components/UsersList";
import { users } from "./data/users";
import "./reset.css";
import "./App.module.css";

function App() {
  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
