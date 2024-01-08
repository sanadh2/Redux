import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";

const initialStateCusto = {
  fullName: "",
  nationalID: null,
  created: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCusto,
  reducers: {
    newCustomer: {
      reducer(state, action) {
        state.fullName = action.payload.name;
        state.nationalID = action.payload.id;
        state.created = Date.now();
      },
      prepare(name, id) {
        return { payload: { name, id } };
      },
    },

    changeName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { changeName, newCustomer } = customerSlice.actions;
