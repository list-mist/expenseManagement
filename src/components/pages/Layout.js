import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Layout = () => {
  const [mode, setMode] = useState("dark");
  const changeMode = (e) =>{
     if(mode === "white") setMode("dark");
     setMode("light")
  }
  return ( 
   <>
    {/* <ThemeProvider theme={darkTheme}> */}
    <NavBar/>
    <Outlet/>
    {/* </ThemeProvider> */}
    </>
  )
}
