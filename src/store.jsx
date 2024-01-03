import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { accountReducer } from "./Components/Features/Account/AccountSlice";

import { custoReducer } from "./Components/Features/Customers/customerSlice";

import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: custoReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
