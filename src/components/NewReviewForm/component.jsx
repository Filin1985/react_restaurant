import classNames from "classnames";
import { ReviewForm } from "../ReviewForm/component";

import styles from "./styles.module.css";

export const NewReviewForm = ({ className, ...props }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <ReviewForm {...props} />
    </div>
  );
};
