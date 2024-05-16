import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader: false,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoader: (state) => {
      state.loader = !state.loader;
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {setLoader} = generalSlice.actions

export default generalSlice.reducer