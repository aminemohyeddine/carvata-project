import { actionTypes } from "../../../Types/constants";
import { getAllProductsI } from "../../../interfaces/productTypes";
import { ProductI } from "../../../interfaces/productTypes";

export const getProducts = (
  state = [],
  action: { type: string; payload: ProductI[] }
) => {
  switch (action.type) {
    case actionTypes.getAllData:
      return { ...state, allProducts: action.payload };
    default:
      return state;
  }
};
