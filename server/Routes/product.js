import {Router} from "express";
import {verifyTokenAdmin, verifyTokenAuth} from "../utils/verifyToken.js";
import {deleteUser, getAllUsers, getUser, getUserStats, updateUser} from "../Controllers/user.js";
import {createProduct, deleteProduct, getAllProduct, getProduct, updateProduct} from "../Controllers/product.js";

const router = Router()

//Create
//http://localhost:8001/api/product/
router.post('/', verifyTokenAdmin, createProduct)

//update
//http://localhost:8001/api/product/:id
router.patch('/:id', verifyTokenAdmin, updateProduct)

//delete
//http://localhost:8001/api/product/:id
router.delete('/:id', verifyTokenAdmin, deleteProduct)

//get Product
//http://localhost:8001/api/product/find/:id
router.get('/find/:id', getProduct)

//get all products
//http://localhost:8001/api/product/
router.get('/', getAllProduct)

//get user stats
//http://localhost:8001/api/user/stats
router.get('/stats', verifyTokenAdmin, getUserStats)


export default router
