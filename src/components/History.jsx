import React from "react";
import "./History.css";
import { useContext } from "react";
import TransactionsContext from "../data/TransactionsContext";

const History = () => {
  const { transactions, deleteTransaction } = useContext(TransactionsContext);
  //console.log(transactions);

  return (
    <div className="History">
      <h3 className="title-small">History</h3>
      {/* {console.log(transactions)} */}
      <div className="history-items">
        {transactions.map((tran) => (
          <div
            key={tran.id}
            className={`white-card history-item ${
              tran.amount >= 0 ? "positive" : "negative"
            }`}
            onDoubleClick={() => deleteTransaction(tran.id)}
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
