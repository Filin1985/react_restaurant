import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishAmountById } from "../../store/features/cart/selectors";
import { cartSlice } from "../../store/features/cart";

export const DishContainer = ({ dish, ...props }) => {
  const amount = useSelector((state) => selectDishAmountById(state, dish?.id));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={() => {
        dispatch(cartSlice.actions.incrementDish(dish.id));
      }}
      decrement={() => {
        dispatch(cartSlice.actions.decrementDish(dish.id));
      }}
      {...props}
    />
  );
};
