import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts:[],
  post: {}
}

export const postSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      //data manipulation-crud-create/add/read/get/update
      create_data: function(state,action){
        return{...state,post:[...action.payload]}
      }  
    },
})

// Action creators are generated for each case reducer function
export const { create_data } = postSlice.actions

export default postSlice.reducer