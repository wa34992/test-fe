import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
  access: string
  refresh: string
}

const initialState: LoginState = {
  access: '',
  refresh: ''
}

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    callLoginRequest: () => {  },
    authentication: (state, payload) => {
      state.access = payload.payload.access
      state.refresh = payload.payload.refresh
    }
  },
})

export const { callLoginRequest, authentication } = loginSlice.actions

export default loginSlice.reducer