import { actionTypes } from "../../Types/constants";
import { Dispatch } from "redux";
import { ProductI } from "../../interfaces/productTypes";

type getAllDataInterface = {
  type: actionTypes.getAllData;
  payload: ProductI[];
};

type Action = getAllData;

interface getAllData {
  type: actionTypes.getAllData;
  payload: ProductI[];
}

export const getAllData = (allData: ProductI[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.getAllData,
      payload: allData,
    });
  };
};
