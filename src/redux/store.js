import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './cartSlice'
import AuthReducer from './authSlice'

export default configureStore({
    reducer: {
        cart: CartReducer,
        auth: AuthReducer
    }
})




