import React, {useState} from 'react'
import {Grid, Card, Typography, Tabs, Tab, Box} from "@mui/material"
import pic from '../../Images/pic.png'
import UserLogin from './UserLogin'
import SignUp from './SignUp'


const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
export default function Login() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
   <>
    <Grid container sx = {{height : '90vh'}}>
      <Grid item Lg={7} sm={5} sx = {{
        backgroundImage : `url(${pic})`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        display : {xs : 'none', sm : 'block'}
      }}>
      
      </Grid>
      <Grid item Lg={5} sm={7} sx= {12}>
       <Card sx = {{width : '100%' , height : '100%'}}>
        <Box sx= {{borderBottom:2, borderColor:"divider"}}>
          <Tabs value = {value} onChange = {handleChange}>
            <Tab  label = "Login" sx ={{textTransform :'none', fontWeight:'bold'}} >
            </Tab>
            <Tab  label = "Registration" sx ={{textTransform :'none', fontWeight:'bold'}} >
            </Tab>
          </Tabs>
        </Box>
        <TabPanel value={value} index={1}>
              <SignUp/>
        </TabPanel>
        <TabPanel value={value} index={0}>
              <UserLogin/>
        </TabPanel>
       </Card>
      </Grid>
    </Grid>
   </>
  )
}
