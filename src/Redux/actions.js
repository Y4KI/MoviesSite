import { requestApi } from "../Api";
import dispatch from "./store";
import { REQUEST_API, WATCH_MOVIE, WISHED_MOVIE } from "./types";

export const getApiData = async () => {
  const response = await requestApi();
  dispatch({ type: REQUEST_API, payload: response });
};

export const getWishMovies = (index) => {
  console.log(index);
  dispatch({ type: WISHED_MOVIE, payload: index });
};

export const watchMovie = (id) => {
  dispatch({ type: WATCH_MOVIE, payload: id });
};
