import { InitialState } from "./initialState";
import { REQUEST_API } from "./types";

export const Reducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    // API Request
    case REQUEST_API:
      return { ...state, users: payload };

    default:
      return state;
  }
};
