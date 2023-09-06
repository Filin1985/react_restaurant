import classNames from "classnames";
import { UserContainer } from "../User/container";

import styles from "./styles.module.css";

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }

  return (
    <div className={classNames(className, styles.root)}>
      <UserContainer userId={review.userId} />
      <div className={styles.rating}>Rating: {review.rating}</div>
      <span className={styles.text}>{review.text}</span>
    </div>
  );
};
