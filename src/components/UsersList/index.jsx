import { Component } from "react";
import UserListItem from "../UserListItem";
import styles from "./UsersList.module.css";

class UserList extends Component {
  render() {
    const { users, onSelect } = this.props;

    return (
      <div className={styles.userCardList}>
        {users.map((u) => (
          <UserListItem key={u.id} user={u} onSelect={onSelect} />
        ))}
      </div>
    );
  }
}
export default UserList;
