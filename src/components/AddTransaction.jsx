import React from "react";
import "./AddTransaction.css";

const AddTransaction = () => {
  const onSubmit = () => {};

  return (
    <div className="Add-transaction">
      <h3 className="title-small">Add new transaction</h3>
      <form className="add-transaction-form" onSubmit={onSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          required
          className="text-field"
        />

        <label htmlFor="amount">Amount</label>
        <label>(negative: expense, positive: income)</label>
        <input
          type="number"
          placeholder="Enter amount..."
          required
          className="text-field"
        />

        <input
          type="submit"
          value="Add transaction..."
          className="amount-submit"
        />
      </form>
    </div>
  );
};

export default AddTransaction;
