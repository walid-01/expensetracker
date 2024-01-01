import "./App.css";
import Title from "./components/Title";
import Balance from "./components/Balance";
import InOut from "./components/InOut";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { TransactionsProvider } from "./data/TransactionsContext";

function App() {
  return (
    <TransactionsProvider>
      <div className="main">
        <div className="App">
          <Title />
          <Balance />
          <InOut />
          <History />
          <AddTransaction />
        </div>
      </div>
    </TransactionsProvider>
  );
}

export default App;
