import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type CartState = {
  isOpen: boolean
  items: Cardapio[]
}

const initialState: CartState = {
  isOpen: false,
  items: []
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
    },
    add: (state, action: PayloadAction<Cardapio>) => {
      const flag = state.items.find((item) => item.id === action.payload.id)
      if (!flag) {
        state.items.push(action.payload)
      } else {
        alert('Item já consta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { open, close, add, remove, clear } = cartSlice.actions
export default cartSlice.reducer
