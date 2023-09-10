import React, { useEffect, useState } from 'react'
import {useManageExpensesQuery, useCreateExpensesMutation,useDeleteExpensesMutation} from '../Services/UserAuthApi'
import { Navigate, useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '../Services/LocalStorageService';
import Expenses from '../Expenses/Expenses'
import NewExpense from '../InputExpense/NewExpense'
import LogoutDialog from './LogoutDialog';
import { useSelector, useDispatch } from 'react-redux'
import { unSetUserToken } from '../../features/authSlice';

import { deleteData, getData } from '../Services/Data';
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
  const {access_token} = getToken()

  // const {data, isSuccess} = useManageExpensesQuery(access_token)
  // const [data1, setData1] = useState([])

  const [createExpenses] = useCreateExpensesMutation(access_token)
  const [open, setOpen] = useState(false);
  const[expenses, setExpenses] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate()


  const getItem = async() =>{
    // error.data.errors.non_field_errors[0]
      // if(data && isSuccess){ 
        // console.log("Called")
        //setItems(await getData(access_token))
        //const { data1 } = await getData(access_token)
        setItems(await getData(access_token))
        console.log(items)
       
  }

  const dispatch = useDispatch()
  
  console.log(access_token)
  
  useEffect(() =>{
    if(access_token) {
      getItem()
    }
    else{
      setOpen(true)
      console.log("Kindly login again! !")
    }
  },[access_token])
  
  
  const AddExpense = (e) => {
    // setExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
    const newData = {
      title: e.title,
      amount: e.amount,
      date: e.date
    }
    setExpenses({...expenses,  newData});
  };
  const handleSubmit = async(actualData) => {
    // console.log("ok here")
    const response = await createExpenses({actualData,access_token})
    console.log(response)
   
    if(response.error && response.error.data.errors.code === 'token_not_valid'){
       dispatch(unSetUserToken({access_token : null}))
       removeToken()
       // remove token
       navigate('/')
    }
    if(response.data){
      const Newdata = {
        ...actualData,
        id : Math.random.toString()
       }
       
      AddExpense(Newdata)
      getItem()
    }
    
  }

    const [deleteExpenses] = useDeleteExpensesMutation(access_token)
    const deleteExpense = async (e,title,date) => {
    console.log(title,date)
    const actualData = {
             'title' : title,
             'date':date
    }
    // const response = deleteData({actualData, access_token})
     
    const response = await deleteExpenses({actualData,access_token})
    console.log(response)
    getItem()
          // props.getItem()
    //  console.log(response, "ok")
  }

  return (
     <>
    
     <LogoutDialog open = {open} handleClose = {handleClose} />  
     <NewExpense onAddExpense = {AddExpense} getItems = {getItem} handleSubmit = {handleSubmit} />
     <Expenses items={items} setItems = {setItems} deleteExpense = {deleteExpense} /> 

     </>
  )
}
