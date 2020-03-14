import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReducer";
import ModalReducer from "./modalReducer";

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  modalState: ModalReducer
})
