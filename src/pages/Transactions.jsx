import TransactionList from "../components/TransactionList";

function Transactions({
  transactions,
  onDeleteTransaction,
  onEditTransaction,
}) {
  return (
    <div>
      <h1>Transactions</h1>
      <p>All your transactions</p>

      <div className="transactions-section">
        <TransactionList
          transactions={transactions}
          onDeleteTransaction={onDeleteTransaction}
          onEditTransaction={onEditTransaction}
        />
      </div>
    </div>
  );
}

export default Transactions;