import {Router} from "express";
import {verifyToken, verifyTokenAdmin, verifyTokenAuth} from "../utils/verifyToken.js";
import {createOrder, deleteOrder, getAllOrder, getOrder, statsOrder, updateOrder} from "../Controllers/order.js";

const router = Router()

//Create
//http://localhost:8001/api/order/
router.post('/', verifyToken, createOrder)

//update
//http://localhost:8001/api/order/:id
router.patch('/:id', verifyTokenAdmin, updateOrder)

//delete
//http://localhost:8001/api/order/:id
router.delete('/:id', verifyTokenAdmin, deleteOrder)

//get user order
//http://localhost:8001/api/order/find/:userId
router.get('/find/:userId', verifyTokenAuth, getOrder)

//get all products
//http://localhost:8001/api/order/
router.get('/', verifyTokenAdmin, getAllOrder)

//stats
//http://localhost:8001/api/order/income
router.get('/income', verifyTokenAdmin, statsOrder)

export default router