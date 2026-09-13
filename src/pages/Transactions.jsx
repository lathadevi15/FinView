import TransactionItem from "../components/TransactionItem";

function Transactions({ transactions }) {
  return (
    <div>
      <h1>Transactions</h1>
      <p>All your transactions</p>

      <div className="transactions-section">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
}

export default Transactions;