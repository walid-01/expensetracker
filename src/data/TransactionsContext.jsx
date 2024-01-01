import { createContext, useReducer } from "react";

//Create Context
const TransactionsContext = createContext();

const initialState = {
  transactions: [
    {
      id: 1,
      description: "Cash",
      amount: 300,
    },
    {
      id: 2,
      description: "Book",
      amount: -200,
    },
  ],
};

const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DELETE:
      return {
        ...state,
        transactions: state.transactions.filter(
          (tran) => tran.id !== action.payload
        ),
      };
    case ACTIONS.ADD:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

//Provider Component
export const TransactionsProvider = ({ children }) => {
  //const [transactions, setTransactions] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: transaction,
    });
  };

  //Fetch Transactions
  /*
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

  //Add Transaction
  const AddTransaction = async (transaction) => {
    try {
      const res = await fetch("http://localhost:8000/transactions", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(transaction),
      });

      const data = await res.json();
      setTransactions([...transactions, transaction]);
    } catch (error) {
      console.log(error);
    }
  };
  */
  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContext;
