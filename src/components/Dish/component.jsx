import classNames from "classnames";
import { Button } from "../Button/component";

import styles from "./styles.module.css";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const { price: dishPrice, name } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.name}>{name}</div>
      <div className={styles.actions}>
        <Button disabled={amount === 0} onClick={decrement}>
          -
        </Button>
        <span> {amount} </span>
        <Button disabled={amount === 5} onClick={increment}>
          +
        </Button>
      </div>
      <div className={styles.total}>Total: ${amount * dishPrice}</div>
    </div>
  );
};
