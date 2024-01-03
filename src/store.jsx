import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { accountReducer } from "./Components/Features/Account/AccountSlice";

import { custoReducer } from "./Components/Features/Customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: custoReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
