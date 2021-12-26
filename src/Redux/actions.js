import { requestApi } from "../Api";
import dispatch from "./store";
import { REQUEST_API } from "./types";

export const getApiData = async () => {
  const response = await requestApi();
  dispatch({ type: REQUEST_API, payload: response });
};
