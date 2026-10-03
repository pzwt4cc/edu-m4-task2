import { Component } from "react";
import styles from "./UserListItem.module.css";

class UserListItem extends Component {
  render() {
    const { user, onSelect } = this.props;
    const {
      id,
      firstName,
      lastName,
      age,
      city,
      profession,
      imgSrc,
      isSelected,
    } = user;

    return (
      <article
        className={`${styles.userCard} ${isSelected ? styles.selected : ""}`}
        onClick={() => onSelect(id)}
      >
        <img
          className={styles.userImg}
          src={imgSrc}
          alt={`${firstName} ${lastName}`}
        />
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
}

export default UserListItem;
