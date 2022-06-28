import React ,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [open, setOpen] = useState(false)
  const changeTitleHanlder = (e) => {
     setTitle(e.target.value);
  }
  const changeAmountHanlder = (e) => {
    setAmount(e.target.value);
 }
 const changeDateHanlder = (e) => {
    setDate(e.target.value);
 }
 const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(title, amount, date)
    const data = {
        title : title,
        amount : amount,
        date : new Date(date)
    }
  //   const data1 = {
  //     title : "title",
  //     amount : "12",
  //     date : new Date("2021-04-05")
  // }
    //  console.log(data1)
    props.handleSubmit(data)
    setTitle("");
    setAmount("");
    setDate("");

 }
  return (
  
    <form onSubmit = {handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'  value={title} onChange={changeTitleHanlder}/>
        </div>
        
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={changeAmountHanlder}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={changeDateHanlder}/>
        </div>
      </div>
       
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>

  );
};

export default ExpenseForm;