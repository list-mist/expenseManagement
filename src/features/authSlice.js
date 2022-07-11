import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: null,
}

export const authSlice = createSlice({
  name: 'auth_token',
  initialState,
  reducers: {
     getUserToken : (state,action) => {
      //  console.log(state.access_token, action.payload.access_token)
        console.log("Helllll")
        return state.access_token
     },
     setUserToken : (state, action) =>{
        state.access_token = action.payload.access_token
     },
     unSetUserToken : (state, action) =>{
        state.access_token = action.payload.access_token
     }
  },
})



export const { setUserToken, unSetUserToken, getUserToken } = authSlice.actions

export default authSlice.reducer