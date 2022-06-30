import React from 'react';

import ExpenseForm from './ExpenseForm';
import ExpForm from './ExpForm';
import './NewExpense.css';
import { useCreateExpensesMutation } from '../Services/UserAuthApi';
import { getToken } from '../Services/LocalStorageService';
const NewExpense = (props) => {
  
  const {access_token} = getToken()
  const [createExpenses] = useCreateExpensesMutation(access_token)
  // console.log("Oka")
  const handleSubmit = async(actualData) => {
    // console.log(data)
    const response = await createExpenses({actualData,access_token})
    console.log(response.data)
    if(response.data){
      const Newdata = {
        ...actualData,
        id : Math.random.toString()
       }
       props.onAddExpense(Newdata)
    }
    
  }
  const onSaveExpenseForm = (data) =>{
     const Newdata = {
      ...data,
      id : Math.random.toString()
     }
     props.onAddExpense(Newdata)
     ///console.log(Newdata)
  }
  return (
    <div className='new-expense'>
      {console.log("Hellos")}
      {/* <ExpenseForm handleSubmit = {handleSubmit}/> */}
      <ExpForm handleSubmit = {handleSubmit}/>
    </div>
  );
};

export default NewExpense;