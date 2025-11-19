import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        expenses.map((item) => (
          <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
