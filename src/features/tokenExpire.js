import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token_expire: null,
}

export const tokenExpire = createSlice({
  name: 'token_expire',
  initialState,
  reducers: {
     setUserToken : (state, action) =>{
        state.access_token = action.payload.access_token
     },
     unSetUserToken : (state, action) =>{
        state.access_token = action.payload.access_token
     }
  },
})
// export const tokenExpire = (timer) => {
//    setTimeout( () =>{
//      console.log("Hello")
//    }, 5000
//    )
//  }

export const {  } = tokenExpire.actions

export default tokenExpire.reducer