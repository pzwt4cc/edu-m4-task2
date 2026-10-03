import styles from "./UserListItem.module.css";

function UserListItem({ user }) {
  const { firstName, lastName, age, city, profession, imgSrc } = user;

  return (
    <article className={styles.userCard}>
      <img className={styles.userImg} src={imgSrc} alt="userImg" />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>
          {firstName} {lastName}
        </h2>

        <ul className={styles.userDesc}>
          <li className={styles.userDescInfo}>Profession: {profession}</li>
          <li className={styles.userDescInfo}>Age: {age}</li>
          <li className={styles.userDescInfo}>City: {city}</li>
        </ul>
      </div>
    </article>
  );
}

export default UserListItem;
