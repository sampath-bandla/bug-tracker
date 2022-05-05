import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('user')) || {
  isAuth: false,
  user: null,
  token: "" 
} 

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user,token } = action.payload;
      state.user = user;
      state.token = token;
      if (user === null) {
          state.isAuth = false;
      } else {
          state.isAuth = true;
      }
      localStorage.setItem('user',JSON.stringify(state))
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer