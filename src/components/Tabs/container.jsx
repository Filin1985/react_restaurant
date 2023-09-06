import { useSearchParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../store/services/api";
import { Button } from "../Button/component";
import { Tabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const {
    data: restaurants,
    isLoading,
    isError,
    refetch,
  } = useGetRestaurantsQuery(undefined);
  const [search, setSearch] = useSearchParams();

  if (isError) {
    return <Button onClick={refetch}>Refetch</Button>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  const filteredRestaurants = restaurants.filter(({ name }) => {
    return (
      name.toLowerCase().indexOf((search.get("search") || "").toLowerCase()) !==
      -1
    );
  });

  return (
    <div>
      <input
        value={search.get("search") || ""}
        onChange={(event) => setSearch({ search: event.target.value })}
      />
      <Tabs restaurants={filteredRestaurants} {...props} />
    </div>
  );
};
