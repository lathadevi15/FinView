import { useState } from "react";
import SummaryCard from "../components/SummaryCard";
import TransactionItem from "../components/TransactionItem";
import EditTransactionForm from "../components/EditTransactionForm";

function Dashboard({
  transactions,
  onDeleteTransaction,
  onEditTransaction,
}) {
  const [editingTransaction, setEditingTransaction] = useState(null);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Here's an overview of your finances.</p>

      <div className="summary-cards">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={totalIncome} />
        <SummaryCard title="Expenses" amount={totalExpenses} />
      </div>

      <div className="transactions-section">
        <h2>Recent Transactions</h2>

        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <TransactionItem
              transaction={transaction}
              onDelete={onDeleteTransaction}
              onEdit={setEditingTransaction}
            />

            {editingTransaction?.id === transaction.id && (
              <EditTransactionForm
                key={editingTransaction.id}
                transaction={editingTransaction}
                onSave={onEditTransaction}
                onCancel={() => setEditingTransaction(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;