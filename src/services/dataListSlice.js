import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataList: [],
}

export const dataListSlice = createSlice({
  name: 'dataList',
  initialState,
  reducers: {
    dataListUpdate: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { dataListUpdate } = dataListSlice.actions

export default dataListSlice.reducer