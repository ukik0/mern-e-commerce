import express from 'express'
import cors from 'cors'
import mngoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())