import classNames from "classnames";
import { LoginButton } from "../LoginButton/component";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <LoginButton />
      <Link to="/" replace>
        Home
      </Link>
      <Link to="/restaurants">Restaurants</Link>
    </header>
  );
};
