import { useState } from "react";
import TransactionItem from "../components/TransactionItem";
import EditTransactionForm from "../components/EditTransactionForm";

function Transactions({
  transactions,
  onDeleteTransaction,
  onEditTransaction,
}) {
  const [editingTransaction, setEditingTransaction] = useState(null);

  return (
    <div>
      <h1>Transactions</h1>
      <p>All your transactions</p>

      <div className="transactions-section">
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

export default Transactions;