import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./Components/Features/Account/AccountSlice";

import customerReducer from "./Components/Features/Customers/customerSlice";

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
