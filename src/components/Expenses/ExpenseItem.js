import React from 'react'
import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { Button } from '@mui/material';
import { getToken } from '../Services/LocalStorageService';
import { useDeleteExpensesMutation } from '../Services/UserAuthApi';
// import Checkbox from '@mui/material/Checkbox';


export default function ExpenseItem(props) {
   console.log(props)
  // const {access_token} = getToken()
  // const [deleteExpenses] = useDeleteExpensesMutation(access_token)
  // const deleteSubmit = async (e,title,date) => {
  //     console.log(title,date)
  //     const actualData = {
  //        'title' : title,
  //        'date':date
  //     }
  //     const response = deleteExpenses({actualData,access_token})
  //     // props.getItem()
  //     console.log(response, "ok")
  // }
  return (
    <Card className='expense-item'>
     {/* <Checkbox  onClick={(e) => deleteSubmit(e,props.title,props.date)}/> */}
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      <div>
        <Button variant="outlined" size="lg" style = {{color : "white",borderRadius: 15 }} onClick={(e) => props.deleteExpense(e,props.title,props.date)}><strong>Delete</strong></Button>
      </div>
    </div>
  </Card>
  );
}
