import React, {useState} from 'react'
import { TextField, Button, Box , Alert, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../Services/UserAuthApi'


export default function SignUp() {

const[ serverError, setServerError] = useState({})
const navigate = useNavigate()
const [registerUser, {isLoading, isError}] = useRegisterUserMutation()

const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    const actualData = {
        email : data.get('email'),
        name : data.get('name'), 
        password : data.get('password'),
        password2 : data.get('password2'),
    }
    // console.log(actualData)
    // if(actualData.email && actualData.password && actualData.password2 && actualData.name){
    //    if(actualData.password === actualData.password2){
    //     console.log(actualData)
    //     document.getElementById("signup-Form").reset()
    //     // setError({status : true, msg : "Loading...", type : 'success'})
    //     navigate('/demo')
    //    }

    // }
    // else{
    //     setError({status : true, msg : "All fields are required", type : 'error'})
    // }
    const response = await registerUser(actualData)
  //  console.log(response.data)
    if(response.error){
        setServerError(response.error.data.errors)
    }
    if(response.data){
        navigate('/demo')
    }
    
    //console.log(response)
}
  return (
   <>
    <Box component = 'form' noValidte sx={{ mt : 2}} id="signup-Form" onSubmit = {handleSubmit}>
        <TextField
            required
            fullWidth
            id = "email"
            name = "email"
            label = "Email"
 
        />
        {serverError.email ? <Typography> {serverError.email[0]} </Typography> : ""}
        <TextField
            required
            fullWidth
            id = "name"
            name = "name"   
            label = "Name"
 
        />
        {serverError.name ? <Typography> {serverError.name[0]} </Typography> : ""}
         <TextField sx={{ mt : 2}}
            required
            fullWidth
            id = "password"
            name = "password"
            label = "password"
            type = "password"
        />
        {serverError.password ? <Typography> {serverError.password[0]} </Typography> : ""}
         <TextField sx={{ mt : 2}}
            required
            fullWidth
            id = "password2"
            name = "password2"
            label = "password2"
            type = "Confirm password"
        />
        {serverError.password2 ? <Typography> {serverError.password2[0]} </Typography> : ""}
        <Box sx={{ mt : 2}}  textAlign = "center">
        
        <Button type = "submit" variant = "contained" sx = {{mt : 5, mb : 2, px : 3}}>Create account</Button>
        </Box>
        {/* { {serverError.non_fields_errors ? <Alert severity='error'>{serverError.non_fields_errors}</Alert> : ''} } */}
        </Box>
   </>
  )
}
