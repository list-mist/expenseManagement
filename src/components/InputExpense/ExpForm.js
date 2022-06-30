import React, { useState } from 'react'
import { TextField, Button, Box , Alert, Typography } from '@mui/material'
import { getToken } from '../Services/LocalStorageService'
import { useCreateExpensesMutation } from '../Services/UserAuthApi'
const actualData1 = {
    title : 'cake',
    amount : '200', 
    date : "2022-07-27"
}
export default function ExpForm(props) {
    const[num, setNum] = useState(10)
    const {access_token} = getToken()
    const [createExpenses,isSuccess] = useCreateExpensesMutation()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        // console.log(e.target)
        const actualData = {
            title : data.get('title'),
            amount : data.get('amount'), 
            date : (data.get('date'))
        }
        console.log(actualData)
        
        // console.log(actualData1, num)
        // const response = await createExpenses({actualData1,access_token})
        // const response = await createExpenses({actualData,access_token})
        //console.log(response)
        
        props.handleSubmit(actualData)
        
        
    }


  return (
    <>
        <Box component = 'form' noValidte sx={{ mt : 2}} id="expense-Form" onSubmit = {handleSubmit}>
        <TextField
            required
            fullWidth
            id = "title"
            name = "title"
            label = "Title"
 
        />
     
        <TextField
            required
            fullWidth
            id = "amount"
            name = "amount"   
            label = "Amount"
 
        />

         <TextField sx={{ mt : 2}}
            required
            fullWidth
            id = "date"
            name = "date"
            // label = "Date"
            type = "date"
        />
      
        <Box sx={{ mt : 2}}  textAlign = "center">
        
        <Button type = "submit" variant = "contained" sx = {{mt : 5, mb : 2, px : 3}}>Add expense</Button>
        </Box>
        {/* { {serverError.non_fields_errors ? <Alert severity='error'>{serverError.non_fields_errors}</Alert> : ''} } */}
        </Box>
    </>
  )
}
