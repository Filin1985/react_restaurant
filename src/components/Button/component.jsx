import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className={classNames(styles.root, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
