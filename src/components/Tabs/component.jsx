import { NavTab } from "../NavTab/component";

import styles from "./styles.module.css";

export const Tabs = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <NavTab key={id} title={name} className={styles.tab} to={`${id}`} />
      ))}
    </div>
  );
};
