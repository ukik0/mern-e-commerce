import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "../utils/axios";

export const LOGIN = createAsyncThunk('LOGIN', async ({username, password}) => {
    const {data} = await axios.post('/auth/login', {username, password})

    if (data.token) {
        localStorage.setItem('token', data.token)
    }
    return data
})

const authSlice = createSlice({
    name: 'auth', initialState: {
        data: localStorage.getItem('token') || null,
        user: null
    }, reducers: {
        logout: (state) => {
            state.data = null
        }
    }, extraReducers: {
        //LOGIN
        [LOGIN.pending]: (state) => {
            state.data = null
        }, [LOGIN.fulfilled]: (state, action) => {
            state.data = action.payload
            state.user = action.payload
        }, [LOGIN.rejected]: (state) => {
            state.data = null
        },
    }
})

export const {logout} = authSlice.actions

export const checkIsAuth = (state) => state?.auth?.data

export default authSlice.reducer
