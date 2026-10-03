import UserListItem from "../UserListItem";
import styles from "./UsersList.module.css";

function UserList({ users }) {
  return (
    <div className={styles.userCardList}>
      {users.map((u) => (
        <UserListItem key={u.id} user={u} />
      ))}
    </div>
  );
}
export default UserList;
