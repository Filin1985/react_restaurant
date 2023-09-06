import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

export const NavTab = ({ title, to, className }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(className, styles.root, { [styles.active]: isActive })
      }
      to={to}
    >
      {title}
    </NavLink>
  );
};
