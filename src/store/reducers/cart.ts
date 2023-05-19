import { createSlice } from '@reduxjs/toolkit'

type CartState = {
  isOpen: boolean
}

const initialState: CartState = {
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = cartSlice.actions
export default cartSlice.reducer
