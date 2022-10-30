import {Router} from "express";
import {verifyTokenAdmin, verifyTokenAuth} from "../utils/verifyToken.js";
import {deleteUser, getAllUsers, getUser, getUserStats, updateUser} from "../Controllers/user.js";

const router = Router()

//update
//http://localhost:8001/api/user/:id
router.patch('/:id', verifyTokenAuth, updateUser)

//delete
//http://localhost:8001/api/user/:id
router.delete('/:id', verifyTokenAuth, deleteUser)

//get User
//http://localhost:8001/api/user/find/:id
router.get('/find/:id', verifyTokenAdmin, getUser)

//get all users
//http://localhost:8001/api/user/
router.get('/', verifyTokenAdmin, getAllUsers)

//get user stats
//http://localhost:8001/api/user/stats
router.get('/stats', verifyTokenAdmin, getUserStats)


export default router
