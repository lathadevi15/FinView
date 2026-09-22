import { useState } from "react";
import TransactionItem from "./TransactionItem";
import EditTransactionForm from "./EditTransactionForm";

function TransactionList({
  transactions,
  onDeleteTransaction,
  onEditTransaction,
}) {
  const [editingTransaction, setEditingTransaction] = useState(null);

  return (
    <div>
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
  );
}

export default TransactionList;