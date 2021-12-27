import { InitialState } from "./initialState";
import { REQUEST_API, WATCH_MOVIE, WISHED_MOVIE } from "./types";

export const Reducer = (state = InitialState, { type, payload }) => {
  const checkObjects = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };
  switch (type) {
    // API Request
    case REQUEST_API:
      return { ...state, movies: payload };
    // Custom Functions
    case WISHED_MOVIE:
      let newWishedMovie = state.wishedMovies;
      let checking = false;
      newWishedMovie.forEach((elem) => {
        if (checkObjects(elem, state.movies[payload])) return (checking = true);
      });

      if (checking) {
        return { ...state };
      } else {
        newWishedMovie.push(state.movies[payload]);
        return { ...state, wishedMovies: newWishedMovie };
      }

    case WATCH_MOVIE:
      const movieList = state.movies;
      const selectedMovie = movieList.filter((elem) => elem.id === payload);
      return { ...state, selectedMovie: selectedMovie[0] };

    default:
      return state;
  }
};
