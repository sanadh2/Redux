import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const account = useSelector((state) => state.account);
  return (
    <div className="balance">
      {account.isLoading ? "loading..." : formatCurrency(account.balance)}
    </div>
  );
}

export default BalanceDisplay;