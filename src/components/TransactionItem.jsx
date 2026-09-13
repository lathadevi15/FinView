function TransactionItem({ transaction }) {
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
    </div>
  );
}

export default TransactionItem;