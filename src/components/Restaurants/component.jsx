import { RestaurantTabsContainer } from "../Tabs/container";
import { Outlet } from "react-router-dom";

export const Restaurants = () => {
  return (
    <>
      <RestaurantTabsContainer />
      <Outlet />
    </>
  );
};
