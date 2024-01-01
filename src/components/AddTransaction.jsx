import { useState, useContext } from "react";
import "./AddTransaction.css";
import TransactionsContext from "../data/TransactionsContext";

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionsContext);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    //Prevents the page from reloading
    e.preventDefault();

    if (!description || !amount) {
      console.log(description, amount);
      alert("please fill all fields");
      return;
    }

    addTransaction({
      id: Math.floor(Math.random() * 10000) + 1,
      description,
      amount: +amount,
    });
    setDescription("");
    setAmount("");
  };

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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="amount">Amount</label>
        <label>(negative: expense, positive: income)</label>
        <input
          type="number"
          placeholder="Enter amount..."
          required
          className="text-field"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
