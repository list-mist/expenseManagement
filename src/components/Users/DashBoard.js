import React, { useEffect, useState } from 'react'
import {useManageExpensesQuery} from '../Services/UserAuthApi'

import { getToken } from '../Services/LocalStorageService';
import Expenses from '../Expenses/Expenses'
import NewExpense from '../InputExpense/NewExpense'
const rows = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  
];
export const DashBoard = () => {
  const [items, setItems] = useState([])
  const [tokenExpire, setTokenExpire] = useState(false)
  const {access_token} = getToken()
  const {data, isSuccess} = useManageExpensesQuery(access_token)
  
  console.log(data)
  console.log(data.errors)
  const getItem = async() =>{
    // error.data.errors.non_field_errors[0]
      if(data && isSuccess){ 
        setItems(data)
        console.log(items)
      }
      if(data.errors){
         console.log("Login again")
      }
  }
  console.log(items)
  useEffect(() =>{
    getItem()
  },[items,data])
  
  const[expenses, setExpenses] = useState(rows)
  const AddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
     <>
     <NewExpense onAddExpense = {AddExpense}  />
     <Expenses items={items} setItems = {setItems} /> 
     </>
  )
}
