import './ExpenseDate.css'

function ExpenseDate(props1) {
  const month = props1.date.toLocaleString("en-Us", { month: 'long' });
  const day = props1.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props1.date.getFullYear();

  return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
  );
}

export default ExpenseDate;