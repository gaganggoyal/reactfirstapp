function ExpenseDate(props1) {
  const month = props1.date.toLocaleString("en-Us", { month: 'long' });
  const day = props1.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props1.date.getFullYear();

  return (
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
  );
}

export default ExpenseDate;