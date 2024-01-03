const initialStateCusto = {
  fullName: "",
  nationalID: null,
  created: "",
};

export const custoReducer = (state = initialStateCusto, action) => {
  switch (action.type) {
    case "customer/newCustomer":
      return {
        ...state,
        fullName: action.payload.name,
        nationalID: action.payload.id,
        created: new Date(),
      };
    case "customer/changeName":
      return { ...state, fullName: action.payload.name };
    default:
      return state;
  }
};

export const newCustomer = (name, id) => {
  return {
    type: "customer/newCustomer",
    payload: { name, id },
  };
};

export const changeName = (name) => {
  return {
    type: "customer/changeName",
    payload: { name },
  };
};
