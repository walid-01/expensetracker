import React from "react";
import "./InOut.css";
import TransactionsContext from "../data/TransactionsContext";
import { useContext } from "react";

const InOut = () => {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);
  const amounts = transactions.map((tran) => tran.amount);
  const ins = amounts
    .filter((tran) => tran >= 0)
    .reduce((acc, current) => (acc += current), 0)
    .toFixed(2);
  const outs =
    amounts
      .filter((tran) => tran < 0)
      .reduce((acc, current) => (acc += current), 0) * (-1).toFixed(2);
  return (
    <div className="In-out-container white-card">
      <div className="In-out border-right">
        <h3>INCOME</h3>
        <h3 className="green-balance">${ins}</h3>
      </div>
      <div className="In-out">
        <h3>EXPENSE</h3>
        <h3 className="red-balance">${outs}</h3>
      </div>
    </div>
  );
};

export default InOut;
