import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";

import transactionsData from "./data/transactions";

import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(transactionsData);
const handleDeleteTransaction = (id) => {
  setTransactions((currentTransactions) =>
    currentTransactions.filter(
      (transaction) => transaction.id !== id
    )
  );
};

const handleEditTransaction = (updatedTransaction) => {
  setTransactions((currentTransactions) =>
    currentTransactions.map((transaction) =>
      transaction.id === updatedTransaction.id
        ? updatedTransaction
        : transaction
    )
  );
};
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main-content">
    <Routes>
  <Route
  path="/"
  element={<Navigate to="/dashboard" replace />}
/>

  <Route
    path="/dashboard"
    element={<Dashboard
  transactions={transactions}
  onDeleteTransaction={handleDeleteTransaction}
   onEditTransaction={handleEditTransaction}
/>}
  />

  <Route
  path="/transactions"
  element={<Transactions
  transactions={transactions}
  onDeleteTransaction={handleDeleteTransaction}
   onEditTransaction={handleEditTransaction}
/>}
/><Route
    path="/transactions"
    element={<Transactions />}
  />

  <Route
    path="/categories"
    element={<Categories />}
  />

  <Route
    path="/add"
    element={
      <AddTransaction setTransactions={setTransactions} />
    }
  />
</Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;