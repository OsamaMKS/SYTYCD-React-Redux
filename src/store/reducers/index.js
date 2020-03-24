import { combineReducers } from "redux";

import authorR from "./author";
import authorsR from "./authors";

const rootReducer = combineReducers({
  authorState: authorR,
  authorsState: authorsR
});

export default rootReducer;
