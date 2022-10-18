import React from "react";
import "./History.css";
import { useContext } from "react";
import TransactionsContext from "../data/TransactionsContext";

const History = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div className="History">
      <h3 className="title-small">History</h3>
      {/* {console.log(transactions)} */}
      <div className="history-items">
        {transactions.map((tran) => (
          <div
            className={`white-card history-item ${
              tran.amount >= 0 ? "positive" : "negative"
            }`}
          >
            <p>{tran.description}</p>
            <p>{tran.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
