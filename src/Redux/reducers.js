import { InitialState } from "./initialState";
import { REQUEST_API, WISHED_MOVIE } from "./types";

export const Reducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    // API Request
    case REQUEST_API:
      return { ...state, users: payload };
    // Custom Functions
    case WISHED_MOVIE:
      let newWishedMovie = state.wishedMovies;
      let checking = false;
      newWishedMovie.forEach((elem) => {
        if (
          JSON.stringify(elem) === JSON.stringify(state.users[payload]) &&
          !checking
        ) {
          checking = true;
        }
      });
      if (checking) {
        return { ...state };
      } else {
        newWishedMovie.push(state.users[payload]);
        return { ...state, wishedMovies: newWishedMovie };
      }

    default:
      return state;
  }
};
