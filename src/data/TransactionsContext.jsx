import { createContext, useState, useEffect } from "react";

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  //Fetch Transactions
  const fetchTransactions = async () => {
    try {
      return await (await fetch("http://localhost:8000/transactions")).json();
    } catch (error) {
      console.log(error);
    }
  };

  //Loading transactions from json
  useEffect(() => {
    const getTransactions = async () => {
      const transactionsFromServer = await fetchTransactions();
      setTransactions(transactionsFromServer);
    };
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContext;
