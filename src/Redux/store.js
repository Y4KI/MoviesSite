import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Reducer } from "./reducers";

const MiddleWare = [thunk];
export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...MiddleWare))
);

const Dispatch = store.dispatch;
export default Dispatch;
