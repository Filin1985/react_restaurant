import { Header } from "../Header/component";

import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
