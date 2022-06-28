import React from 'react'
import './ExpenseDate.css'
export default function ExpenseDate(props) {
  //onst expenseDate = new Date(2000,11,11);
  // console.log(new Date("2022-06-17"))
  const date = new Date("2022-06-17")
  // const month = props.date?.toLocaleString("en-US", { month: "long" });
  // const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date?.getFullYear();
  const month = date?.toLocaleString("en-US", { month: "long" });
  const day = date?.toLocaleString("en-US", { day: "2-digit" });
  const year = date?.getFullYear();
  console.log(year)
  return (
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
  </div>

  )
}
