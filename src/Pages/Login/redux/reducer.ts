import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  data: any
}

const initialState: CounterState = {
  data: {}
}

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    callLoginRequest: () => { },
    authentication: (state, payload) => {
      state.data = payload
    }
  },
})

export const { callLoginRequest, authentication } = loginSlice.actions

export default loginSlice.reducer