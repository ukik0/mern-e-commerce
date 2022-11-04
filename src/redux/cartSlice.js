import {createSlice, CreateSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products:  JSON.parse(localStorage.getItem('cart')) || [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price * action.payload.quantity
        },

    }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer