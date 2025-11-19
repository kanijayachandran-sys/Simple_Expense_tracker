function ExpenseItem({ item, onDelete }) {
  return (
    <div className="expense-item">
      <div>
        <h3>{item.title}</h3>
        <p>
          ₹{item.amount} • {item.category} • {item.date}
        </p>
      </div>
      <button className="delete" onClick={() => onDelete(item.id)}>
        ✖
      </button>
    </div>
  );
}

export default ExpenseItem;
