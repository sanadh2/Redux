import { createSlice } from "@reduxjs/toolkit";

const initialStateAcc = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialStateAcc,
  reducers: {
    deposite(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    reqLoan(state, action) {
      if (state.loan > 0) return state;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance = state.balance + action.payload + amount;
    },
    payLoan(state, action) {
      (state.loan = 0),
        (state.loanPurpose = ""),
        (state.balance = state.balance - state.loan);
    },
  },
});

export const { deposite, withdraw, reqLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
