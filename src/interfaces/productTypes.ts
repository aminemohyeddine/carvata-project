import { getAllData } from "./../redux/actions/actions";
import { actionTypes } from "../Types/constants";

export interface ProductI {
  id: number;
  title: string;
  url: string;
  oldPrice: number;
  newPrice: number;
  images: number;
  category: string;
  description: string;
}

export interface getAllProductsI {
  type: actionTypes.getAllData;
  payload: ProductI[];
}
