import express from 'express'
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.post('/createUser', createUser)
userRoute.get('/getAllUsers', getAllUsers)
userRoute.get('/getUserById/:id', getUserById)
userRoute.put('/updateUser/:id', updateUser)
userRoute.delete('/deleteUser/:id', deleteUser)

export default userRoute