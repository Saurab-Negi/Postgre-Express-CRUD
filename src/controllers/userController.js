import responseHandler from "../middlewares/responseHandler.js"
import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js"

export const createUser = async (req, res, next) => {
    const { name, email } = req.body
    try {
        const user = await createUserService(name, email)
        responseHandler(res, 201, 'User created successfully', user)
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const user = await getAllUsersService()
        responseHandler(res, 200, 'Users fetched successfully', user)
    } catch (error) {
        next(error)
    }
}

export const getUserById = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await getUserByIdService(id)

        if (!user) {
            responseHandler(res, 404, 'User not found')
        }
        responseHandler(res, 200, 'User fetched successfully', user)
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    const { id } = req.params.id
    const { name, email } = req.body
    try {
        const user = await updateUserService(id, name, email)

        // if (!user) {
        //     responseHandler(res, 404, 'User not found')
        // }
        responseHandler(res, 200, 'User updated successfully', user)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await deleteUserService(id)

        // if (!user) {
        //     responseHandler(res, 404, 'User not found')
        // }
        responseHandler(res, 200, 'User deleted successfully', user)
    } catch (error) {
        next(error)
    }
}