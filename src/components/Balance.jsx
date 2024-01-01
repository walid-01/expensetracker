import { useContext } from "react";
import TransactionsContext from "../data/TransactionsContext";

const Balance = () => {
  var total = 0;
  const { transactions } = useContext(TransactionsContext);
  total = transactions
    .map((tran) => tran.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="Balance">
      <h3>YOUR BALANCE</h3>
      <h1 className="balance-money">${total}</h1>
    </div>
  );
};

export default Balance;
