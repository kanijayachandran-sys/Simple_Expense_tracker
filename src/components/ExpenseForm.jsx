import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    onAdd({
      title,
      amount,
      category,
      date: new Date().toLocaleDateString(),
    });

    setTitle("");
    setAmount("");
    setCategory("General");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>General</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
