function Categories({ transactions }) {
  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const categoryTotals = expenses.reduce((totals, transaction) => {
    const category = transaction.category;

    if (!totals[category]) {
      totals[category] = 0;
    }

    totals[category] += transaction.amount;

    return totals;
  }, {});

  return (
    <div>
      <h1>Categories</h1>

      <div>
        {Object.entries(categoryTotals).map(
          ([category, amount]) => (
            <div key={category}>
              <h3>{category}</h3>
              <p>₹{amount}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Categories;