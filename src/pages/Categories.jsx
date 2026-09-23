import CategoryCard from "../components/CategoryCard";

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

      <div className="category-cards">
        {Object.entries(categoryTotals).map(
          ([category, amount]) => (
            <CategoryCard
              key={category}
              category={category}
              amount={amount}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Categories;