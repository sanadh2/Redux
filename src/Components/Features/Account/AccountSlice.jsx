const initialStateAcc = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export function accountReducer(state = initialStateAcc, action) {
  switch (action.type) {
    case "account/deposite":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      //later
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/loadingCurrency":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function deposite(amount, currency) {
  //action creators
  if (currency === "INR") return { type: "account/deposite", payload: amount };
  return async function (dispatch, getState) {
    dispatch({ type: "account/loadingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );
    const data = await res.json();
    const converted = data.rates.INR;

    dispatch({ type: "account/deposite", payload: converted });
  };
}

export function withdraw(amount) {
  //actionCreator
  return { type: "account/withdraw", payload: amount };
}

export function reqLoan(amount, purpose) {
  //actionCreator
  return {
    type: "account/requestLoan",
    payload: {
      purpose,
      amount,
    },
  };
}

export function payLoan() {
  //actionCreator
  return {
    type: "account/payLoan",
  };
}
