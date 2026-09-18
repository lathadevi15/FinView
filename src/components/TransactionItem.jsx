function TransactionItem({ transaction, onDelete, onEdit }) {
  return (
    <div className="transaction-item">
      <div>
        <h3>{transaction.title}</h3>

        <p>
          {transaction.category} • {transaction.date}
        </p>
      </div>

      <strong>
        {transaction.type === "expense" ? "-" : "+"}
        ₹{transaction.amount}
      </strong>

      <div>
        <button onClick={() => onEdit(transaction)}>
          Edit
        </button>

        <button onClick={() => onDelete(transaction.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;