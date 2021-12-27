import { InitialState } from "./initialState";
import { REQUEST_API, WISHED_MOVIE } from "./types";

export const Reducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    // API Request
    case REQUEST_API:
      return { ...state, users: payload };
    case WISHED_MOVIE:
      let newWishedMovie = state.wishedMovies;
      newWishedMovie.push(state.users[payload]);
      return { ...state, wishedMovies: newWishedMovie };
    default:
      return state;
  }
};
