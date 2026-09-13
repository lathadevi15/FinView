import SummaryCard from "../components/SummaryCard";
import TransactionItem from "../components/TransactionItem";

function Dashboard({ transactions }) {
  
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
    <TransactionItem
      key={transaction.id}
      transaction={transaction}
    />
  ))}
</div>
    </div>
  );
}

export default Dashboard;