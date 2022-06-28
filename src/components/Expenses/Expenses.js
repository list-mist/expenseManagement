import React , {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Card from '../UI/Card';

import ExpensesFilter from './ExpensesFilter';
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  // console.log(props)
  const output = props.items.filter(e => {
    const targetDate = new Date(e.date)
   // console.log(targetDate+" target  ")
    // console.log(targetDate.getFullYear().toString())
    return targetDate.getFullYear().toString() == filteredYear
  })
  
  return (
    <Card className="expenses">
     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     {/* {console.log("Ok")} */}
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
