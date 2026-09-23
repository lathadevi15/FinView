function CategoryCard({ category, amount }) {
  return (
    <div className="category-card">
      <h3>{category}</h3>
      <p>₹{amount}</p>
    </div>
  );
}

export default CategoryCard;