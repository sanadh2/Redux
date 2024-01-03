import { useSelector } from "react-redux";
import store from "../../../store";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <h2>
      👋 Welcome, <span style={{ color: "#ff0000" }}>{customer}</span>
    </h2>
  );
}

export default Customer;
