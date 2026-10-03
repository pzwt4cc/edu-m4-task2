import styles from "./UserListItem.module.css";

function UserListItem() {
  return (
    <article className={styles.userCard}>
      <img
        className={styles.userImg}
        src="https://i.pravatar.cc/150?img=11"
        alt="userImg"
      />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>firstname lastname</h2>

        <ul className={styles.userDesc}>
          <li className={styles.userDescInfo}>profession</li>
          <li className={styles.userDescInfo}>age</li>
          <li className={styles.userDescInfo}>city</li>
        </ul>
      </div>
    </article>
  );
}

export default UserListItem;
