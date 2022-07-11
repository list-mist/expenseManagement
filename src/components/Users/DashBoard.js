import React, { useEffect, useState } from 'react'
import {useManageExpensesQuery} from '../Services/UserAuthApi'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../Services/LocalStorageService';
import Expenses from '../Expenses/Expenses'
import NewExpense from '../InputExpense/NewExpense'
import { useDispatch } from 'react-redux'
// import { getUserToken} from '../../features/authSlice'
import LogoutDialog from './LogoutDialog';
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
  const [open, setOpen] = useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate()
  console.log(data)
  
  const getItem = async() =>{
    // error.data.errors.non_field_errors[0]
      if(data && isSuccess){ 
        
        setItems(data)
        console.log(items)
      }
      // if(data.errors){
      //    console.log("Login again")
      // }
  }
  console.log(items)
  const dispatch = useDispatch()
  // dispatch(setUserToken({acces_token : acces_token}))
  //  console.log(dispatch(state.access_token))
  console.log(access_token)
  // setTimeout("logout now ", 2000);
  useEffect(() =>{
    if(access_token) {

      getItem()
      
    }else{
      setOpen(true)
      console.log("Kindly login again!!")
      navigate('/')
    }
  },[items,data,access_token])
  
  const[expenses, setExpenses] = useState(rows)
  const AddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
     <>
     {/* {console.log(open , "he")} */}
     {/* {open ? <logoutDialog open = {true} handleClose = {handleClose} /> : ''  } */}
     <LogoutDialog open = {open} handleClose = {handleClose} /> 
    
     {console.log(open)}
     <NewExpense onAddExpense = {AddExpense}  />
     <Expenses items={items} setItems = {setItems} /> 
     </>
  )
}
