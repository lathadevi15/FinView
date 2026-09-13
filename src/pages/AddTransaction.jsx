import { useState } from "react";

function AddTransaction({ setTransactions }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");

const handleSubmit = (event) => {
  event.preventDefault();

  const newTransaction = {
    id: Date.now(),
    title,
    amount: Number(amount),
    category,
    type,
    date: new Date().toISOString().split("T")[0],
  };

  setTransactions((currentTransactions) => [
    ...currentTransactions,
    newTransaction,
  ]);

  setTitle("");
  setAmount("");
  setCategory("Food");
  setType("expense");
};

  return (
    <div>
      <h1>Add Transaction</h1>

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
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;