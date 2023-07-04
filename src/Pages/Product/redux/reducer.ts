import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  data: any
}

const initialState: CounterState = {
  data: {},
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: () => { },
    setAllProducts: (state, action) => {
      console.log(action)
      state.data = action.payload
    },
  },
})

export const { getAllProducts, setAllProducts } = productSlice.actions

export default productSlice.reducer