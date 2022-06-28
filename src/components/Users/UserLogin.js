import React, {useEffect, useState} from 'react'
import { TextField, Button, Box , Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../Services/UserAuthApi'
import { storeToken, getToken } from '../Services/LocalStorageService'
import { useDispatch } from 'react-redux'
import { setUserToken } from '../../features/authSlice'
const UserLogin = () => {
    // const[error, setError] = useState({
    //     status : false,
    //     msg : "",
    //     type : "",
    // })
    const[ serverError, setServerError] = useState({})
    const navigate = useNavigate()
    const [loginUser] = useLoginUserMutation()
    const dispatch = useDispatch()
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const actualData = {
            email : data.get('email'),
            password : data.get('password'),
        }
      //  console.log(actualData)
        const response = await loginUser(actualData)
      //  console.log(response.data)
        // console.log(response.data.token)
        if(response.error){
            setServerError(response.error.data.errors)
        }
        if(response.data){
            
            storeToken(response.data.token)
            const {acces_token} = getToken()
            dispatch(setUserToken({acces_token : acces_token}))
            navigate('/user')
        }
        
    }
    const {acces_token} = getToken()
    useEffect(()=>{
        dispatch(setUserToken({acces_token : acces_token}))
    },[acces_token,dispatch])
  return (
    <>
        <Box component = 'form' noValidte sx={{ mt : 2}} id="login-Form" onSubmit = {handleSubmit}>
        <TextField
            required
            fullWidth
            id = "email"
            name = "email"
            label = "Email"
 
        />

         <TextField sx={{ mt : 2}}
            required
            fullWidth
            id = "password"
            name = "password"
            label = "password"
            type = "password"
        />
        <Box sx={{ mt : 2}}  textAlign = "center">
        <Button type = "submit" variant = "contained" sx = {{mt : 5, mb : 2, px : 3}}>Login</Button>
        </Box>
        {/* {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''} */}
        </Box>
    </>
  )
}

export default UserLogin