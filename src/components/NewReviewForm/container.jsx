import { useCreateReviewMutation } from "../../store/services/api";
import { NewReviewForm } from "./component";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <span>Saving...</span>;
  }

  return (
    <NewReviewForm
      onSaveForm={(newReview) => createReview({ newReview, restaurantId })}
    />
  );
};
