import restaurants from "../reducers/restaurants";
import { LOAD_RESTAURANTS } from "./action_types";

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  restaurants: restaurants
});
