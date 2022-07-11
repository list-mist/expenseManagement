import React from 'react'
import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { Button } from '@mui/material';

export default function ExpenseItem(props) {
  console.log(props)
 
  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      <div>
        <Button variant="outlined" size="lg" style = {{color : "white" , borderRadius: 15 }}><strong>Edit</strong></Button>
        <Button variant="outlined" size="lg" style = {{color : "white",borderRadius: 15 }}><strong>Delete</strong></Button>
      </div>
    </div>
  </Card>
  );
}
