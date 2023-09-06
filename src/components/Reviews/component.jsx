import { NewReviewFormContainer } from "../NewReviewForm/container";
import { RestaurantReview } from "../RestaurantReview/component";

import styles from "./styles.module.css";

export const Reviews = ({ reviews, restaurantId }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {reviews?.map((review) => (
          <RestaurantReview
            key={review.id}
            review={review}
            className={styles.review}
          />
        ))}
      </div>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
