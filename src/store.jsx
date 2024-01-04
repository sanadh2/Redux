import { configureStore } from "@reduxjs/toolkit";

import { accountReducer } from "./Components/Features/Account/AccountSlice";

import { custoReducer } from "./Components/Features/Customers/customerSlice";

const store = configureStore({
  reducer: { account: accountReducer, customer: custoReducer },
});

export default store;
