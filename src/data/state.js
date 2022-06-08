import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducer/root";
export const store = createStore(rootReducer);
