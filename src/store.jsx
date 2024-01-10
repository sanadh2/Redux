import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./Components/Features/Account/AccountSlice";

import customerReducer from "./Components/Features/Customers/customerSlice";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAccountReducer = persistReducer(persistConfig, accountReducer);
const persistedCustomerReducer = persistReducer(persistConfig, customerReducer);

const store = configureStore({
  reducer: {
    account: persistedAccountReducer,
    customer: persistedCustomerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
