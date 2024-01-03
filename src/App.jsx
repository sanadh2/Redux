import CreateCustomer from "./Components/Features/Customers/CreateCustomer";

import Customer from "./Components/Features/Customers/Customer";
import AccountOperations from "./Components/Features/Account/AccountOperations";
import BalanceDisplay from "./Components/BalanceDisplay";

import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 Welcome to Sanadh's Bank ⚛️</h1>
      {fullName.length <= 0 ? (
        <>
          <CreateCustomer />
        </>
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
