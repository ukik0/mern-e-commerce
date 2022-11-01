import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import AuthRouter from './Routes/auth.js'
import UserRouter from './Routes/user.js'
import ProductRouter from './Routes/product.js'
import CartRouter from './Routes/cart.js'
import OrderRouter from './Routes/order.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

//Dotenv
const PORT = process.env.PORT || 8000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cnml8oe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Server start on Port ${PORT}`))

//Routes
app.use('/api/auth', AuthRouter)
app.use('/api/user', UserRouter)
app.use('/api/product', ProductRouter)
app.use('/api/cart', CartRouter)
app.use('/api/order', OrderRouter)