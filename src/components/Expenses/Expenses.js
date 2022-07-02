import React , {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Card from '../UI/Card';
import { ExpensesChart } from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
const rows = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
]
export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  // console.log(props)
  // console.log("12")
  const output = props.items ? props.items.filter(e => {
    // console.log(e.target.name)
    const targetDate = new Date(e.date)
   // console.log(targetDate+" target  ")
    // console.log(targetDate.getFullYear().toString())
    return filteredYear ? targetDate.getFullYear().toString() == filteredYear : ""
  }) : rows;
    
  
  return (
    <Card className="expenses">
     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     {/* {console.log("Ok")} */}
     <ExpensesChart expenses = {output} />
     {output.map((expense) => (
          <ExpenseItem
            key={ Math.random.toString()}
            
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  )
}
