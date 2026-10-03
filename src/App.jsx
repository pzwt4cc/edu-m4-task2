import { Component } from "react";
import UserList from "./components/UsersList";
import { users } from "./data/users";
import "./reset.css";
// import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users,
    };
  }

  handleSelect = (id) => {
    const { users } = this.state;

    this.setState({
      users: users.map((u) =>
        u.id === id ? { ...u, isSelected: !u.isSelected } : u,
      ),
    });
  };

  render() {
    const { users } = this.state;

    return <UserList users={users} onSelect={this.handleSelect} />;
  }
}

export default App;
