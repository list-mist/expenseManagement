import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken, removeToken } from './Services/LocalStorageService'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../features/authSlice';
export const NavBar = () => {
  
    const [value, setValue] = React.useState('1');
    const [ifLogin, setIfLogin] = useState(false)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   // console.log(getToken())
    const {access_token} = getToken()
    console.log(access_token)
    // if(access_token !== null) {
    //   setIfLogin(true)
    // }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = (e) => {
       dispatch(unSetUserToken({access_token : null}))
       removeToken()
       navigate('/')
    }
  return (
    <div>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
{/* 
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          {access_token === null ? (
            <><Tab label="Login" value="1" component={NavLink}
                  to="" /><Tab label="SignUp" value="2" component={NavLink}
                    to="signup" /><Tab label="Demo" value="3" component={NavLink}
                      to="demo" /></> ) : ( <Button onClick={logout} value="4" variant="contained"> Logout </Button> )}
          </TabList>  */}
          {/* <TabList onChange={handleChange} aria-label="lab API tabs example">
          {access_token === null ? (
            <></> ) : ( <Button onClick={logout} value="4" variant="contained"> Logout </Button> )}
          </TabList>  */}

          {access_token  &&
            
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Button onClick={logout} value="4" variant="contained"> Logout </Button> 
            </TabList>
          }

        </Box>
      </TabContext>
    </Box>
    </div>
  )
}
