import { DishContainer } from "../Dish/container";

import styles from "./styles.module.css";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <DishContainer key={dish.id} dish={dish} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
