import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";

import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewsContainer restaurantId={restaurant.id} />
    </div>
  );
};
