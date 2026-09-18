import { useState } from "react";

function EditTransactionForm({ transaction, onSave, onCancel }) {
  const [title, setTitle] = useState(transaction.title);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category);
  const [type, setType] = useState(transaction.type);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTransaction = {
      ...transaction,
      title,
      amount: Number(amount),
      category,
      type,
    };

    onSave(updatedTransaction);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>

      <div>
        <label>Category</label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Salary</option>
        </select>
      </div>

      <div>
        <label>Type</label>

        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button type="submit">
        Save Changes
      </button>

      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditTransactionForm;