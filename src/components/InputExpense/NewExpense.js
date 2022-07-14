import React, { useState } from 'react';


import ExpForm from './ExpForm';

import { getToken , removeToken} from '../Services/LocalStorageService';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { unSetUserToken } from '../../features/authSlice';
import './NewExpense.css';
import { useCreateExpensesMutation } from '../Services/UserAuthApi';
import { setRefreshData } from '../../features/refreshData';
import { storeID } from '../Services/LocalStorageId';

const NewExpense = (props) => {
  

  const {access_token} = getToken()
  const [createExpenses] = useCreateExpensesMutation(access_token)
  // console.log("Oka")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = async(actualData) => {
    // console.log(data)
    const response = await createExpenses({actualData,access_token})
    // console.log(response)
    // console.log(response.error.data.errors.code)

    
    if(response.error.data.errors.code === 'token_not_valid'){
       console.log("Okay ")
       dispatch(unSetUserToken({access_token : null}))
       removeToken()
       navigate('/')
    }
    if(response.data){
      const Newdata = {
        ...actualData,
        id : Math.random.toString()
       }
       props.onAddExpense(Newdata)
       setRefreshData(true)
       storeID()
      //  props.getItem()
      //  console.log("Okay")
    }
    
  }
  return (
    <div className='new-expense'>
      {/* {console.log("Hellos")} */}
      {/* <ExpenseForm handleSubmit = {handleSubmit}/> */}
      <ExpForm handleSubmit = {handleSubmit}/>
      {/* <DashBoard dataAdded = {dataAdded} /> */}
    </div>
  );
};

export default NewExpense;