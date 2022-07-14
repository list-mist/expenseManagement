import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  refresh_data: 0,
}

export const refreshData = createSlice({
  name: 'refresh_data',
  initialState,
  reducers: {
     setRefreshData : (state, action) =>{
        state.refresh_data += 1 
     },
    //  unSetRefreshData : (state, action) =>{
    //     state.refresh_data = action.payload.access_token
    //  }
  },
})


export const { setRefreshData} = refreshData.actions

export default refreshData.reducer