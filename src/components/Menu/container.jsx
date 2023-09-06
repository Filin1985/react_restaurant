import { useGetDishesQuery } from "../../store/services/api";
import { Menu } from "./component";

export const MenuContainer = ({ restaurantId }) => {
  const { data: dishes, isFetching } = useGetDishesQuery(restaurantId, {
    skip: !restaurantId,
  });

  if (isFetching) {
    return <span>Loading....</span>;
  }

  return <Menu dishes={dishes} />;
};
