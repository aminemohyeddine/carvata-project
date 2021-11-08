import { combineReducers } from "redux";
import { getProducts } from "./all reducers/dataFillReducer";

export const rootReducer = combineReducers({ allProducts: getProducts });
