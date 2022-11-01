import {Router} from "express";
import {verifyToken, verifyTokenAuth} from "../utils/verifyToken.js";
import {createCart, deleteCart, getAllCart, getCart, updateCart} from "../Controllers/cart.js";

const router = Router()

//Create
//http://localhost:8001/api/cart/
router.post('/', verifyToken, createCart)

//update
//http://localhost:8001/api/cart/:id
router.patch('/:id', verifyTokenAuth, updateCart)

//delete
//http://localhost:8001/api/cart/:id
router.delete('/:id', verifyTokenAuth, deleteCart)

//get user vart
//http://localhost:8001/api/cart/find/:userId
router.get('/find/:userId', verifyTokenAuth, getCart)

//get all products
//http://localhost:8001/api/cart/
router.get('/', getAllCart)

export default router