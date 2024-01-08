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
    reqLoan: {
      reducer(state, action) {
        if (state.loan > 0) return state;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
    },
    payLoan(state, action) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state, action) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, reqLoan, payLoan } = accountSlice.actions;

export function deposite(amount, currency) {
  if (currency === "INR") return { type: "account/deposite", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );
    const data = await res.json();
    const converted = data.rates.INR;
    dispatch({ type: "account/deposite", payload: converted });
  };
}

export default accountSlice.reducer;
