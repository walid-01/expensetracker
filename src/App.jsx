import "./App.css";
import Title from "./components/Title";
import Balance from "./components/Balance";
import InOut from "./components/InOut";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { TransactionsProvider } from "./data/TransactionsContext";

function App() {
  return (
    <div className="main">
      <div className="App">
        <TransactionsProvider>
          <Title />
          <Balance />
          <InOut />
          <History />
          <AddTransaction />
        </TransactionsProvider>
      </div>
    </div>
  );
}

export default App;
